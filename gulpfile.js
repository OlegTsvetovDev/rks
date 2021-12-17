// production = false will compile all files uncompressed and uncompressed
// production = true will compile all compressed files
const isDev = true;

const preOptimize = {
        self:   '_preOptimize/',
        fonts:  '_preOptimize/fonts/',
        otfSrc: '_preOptimize/fonts/**/*.otf',
        ttfSrc: '_preOptimize/fonts/**/*.ttf',
        imgSrc: '_preOptimize/img/**/*.{jpg,png,svg,webp,gif,ico}',
      }
      srcFolder = {
        self:      'src/',
        html:      'src/**/!(_*)*.html',
        php:       'src/**/!(_*)*.php',
        css:       'src/scss/**/!(_*)*.scss',
        js:        'src/js/**/!(*min)*.js',
        jsMin:     'src/js/**/*.min.js',
        fontsSrc:  'src/fonts/',
        fonts:     'src/fonts/**/*.{ttf,woff,woff2}',
        fontsFile: 'src/scss/_fonts.scss',
        imgSrc:    'src/img/',
        img:       'src/img/**/*.*',
        htaccess:  '*.htaccess',
        sitemap:   '**/*sitemap*.xml'
      },
      projectFolder = {
        self:  'dist/',
        html:  'dist/',
        php:   'dist/',
        css:   'dist/css/',
        js:    'dist/js/',
        fonts: 'dist/fonts/',
        img:   'dist/img/'
      },
      cleanFolder = {
        all: 'dist/**/*.*'
      }

const { src, dest, task, series, parallel, watch, lastRun } = require('gulp'),
      { readFileSync, writeFile, readdir, appendFile } = require('fs'), // file system
      cleanDist = require('del'), // delete directories
      sass = require('gulp-sass'), // convert scss to css
      cssAutoprefixer = require('gulp-autoprefixer') // auto vendor prefixes
      cssMinify = require('gulp-clean-css'), // css minifier
      cssGroupQueries = require('gulp-group-css-media-queries'), // grouping media queries in css
      jsBabel = require('gulp-babel'), // babel
      jsMinify = require('gulp-uglify'), // js minify
      fileRename = require('gulp-rename'), // rename files
      imageMin = require('gulp-imagemin'), // compress images w/o quality loss
      otf2ttf = require('gulp-fonter'), // convert otf format to ttf
      ttf2woff = require('gulp-ttf2woff'), // convert ttf format to woff
      ttf2woff2 = require('gulp-ttf2woff2'), // convert ttf format to woff2
      mergeStream = require('merge-stream'), // merging multiple src
      includeFiles = require('gulp-file-include'), // file includes via @@
      ifElse = require('gulp-if-else'), // if cond for pipes
      browserSync = require('browser-sync'), // livereload in browser
      phpConnect = require('gulp-connect-php'); // php server connection


function cb() {

}

// convert otf 2 ttf
function otfConvert(cb) {
  src(preOptimize.otfSrc)
  .pipe(otf2ttf({ formats: ['ttf']}))
  .pipe(dest(preOptimize.fonts));

  cb();
}

function otfDestroy(cb) {
  return cleanDist(preOptimize.otfSrc);

  cb();
}

let ttf = series(otfConvert, otfDestroy);

// image and fonts optimization and compressing before running project
// from src/_preOptimize/ folder to src/ folder
// file/folder structure should be the same as src/ folder
function optimizeFontsImg(cb) {
      // ttf 2 woff
  let woff = src(preOptimize.ttfSrc)
              .pipe(dest(srcFolder.fontsSrc))
              .pipe(ttf2woff())
              .pipe(dest(srcFolder.fontsSrc)),
      // ttf 2 woff2
      woff2 = src(preOptimize.ttfSrc)
              .pipe(ttf2woff2())
              .pipe(dest(srcFolder.fontsSrc)),
      // compressing images
      img   = src(preOptimize.imgSrc)
              .pipe(imageMin({}))
              .pipe(dest(srcFolder.imgSrc));

  return mergeStream(woff, woff2, img);
  cb();
}

// imclude all fonts files for mixin include in css
function fonts2file(cb) {
  let fileContent = readFileSync(srcFolder.fontsFile)
  // if (fileContent == '') {
    writeFile(srcFolder.fontsFile, '', cb);
    readdir(preOptimize.self + '/fonts/', function(err, items){
      if (items) {
        let c_fontName;
        for (var i = 0; i < items.length; i++) {
          let fontName = items[i].split('.');
          fontName = fontName[0];
          if (c_fontName != fontName) {
            appendFile(srcFolder.fontsFile, '@include font("' + fontName + '", "' + fontName + '", "400", "normal");\r\n', cb);
          }
          c_fontName = fontName;
        }
      }
    })
  // }
  cb();
}

// exports.ttf = ttf;
exports.optimize = series(
                      ttf,
                      optimizeFontsImg,
                      //fonts2file
                    );

// cleaning folders
function clean(cb) {
  return cleanDist(cleanFolder.all);
  cb();
}

// building html
function html(cb) {
  return src(srcFolder.html, { since: lastRun(html) })
         .pipe(includeFiles())
         .pipe(dest(projectFolder.html))
         .pipe(browserSync.stream());
  cb();
}

// building php
function php(cb) {
  return src(srcFolder.php, { since: lastRun(php) })
         .pipe(includeFiles())
         .pipe(dest(projectFolder.php))
         .pipe(browserSync.stream());
  cb();
}

// building images
function img(cb) {
  return src(srcFolder.img, { since: lastRun(img) })
          .pipe(dest(projectFolder.img))
          .pipe(browserSync.stream());
  cb();
}

// building fonts
function fonts(cb) {
  return src(srcFolder.fonts, { since: lastRun(fonts) })
          .pipe(dest(projectFolder.fonts))
          .pipe(browserSync.stream());
  cb();
}

// watching files' changes
function watchFiles(cb) {
  watch([srcFolder.html], html);
  watch([srcFolder.php], php);
  watch([srcFolder.css], css);
  watch([srcFolder.js], js);
  watch([srcFolder.img], img);
  watch([srcFolder.fonts], fonts);
  cb();
}

// starting php server and live reload
function connectSync(cb) {
  return phpConnect.server({
            base: projectFolder.self,
          }, function (){
            browserSync({
              proxy: '127.0.0.1:8000',
              notify: false
            });
          });
  cb();
}

// building css
function css(cb) {
  return src(srcFolder.css)
         .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
         .pipe(cssAutoprefixer('last 99 versions'))
         .pipe(cssGroupQueries())
         .pipe(
           ifElse(isDev, function() {
             return dest(projectFolder.css);
           }))
         .pipe(cssMinify())
         .pipe(fileRename({ extname: '.min.css' }))
         .pipe(dest(projectFolder.css))
         .pipe(browserSync.stream());
  cb();
}

// building js
function js(cb) {
  var minFiles = src(srcFolder.jsMin)
                 .pipe(dest(projectFolder.js));

  var fullFiles = src(srcFolder.js)
                  .pipe(jsBabel({
                    presets: ['@babel/preset-env']
                  }))
                  .pipe(ifElse(isDev, function() {
                    return dest(projectFolder.js);
                  }))
                  .pipe(jsMinify())
                  .pipe(fileRename({
                    extname: '.min.js'
                  }))
                  .pipe(dest(projectFolder.js))
                  .pipe(browserSync.stream());

  return mergeStream(minFiles, fullFiles);
  cb();
}

let build = parallel(
      html, // build html files
      php, // build php files
      css, // build css files
      js, // build js files
      img, // build img files
      fonts // build fonts files
    );

let connectWatch = parallel(
      connectSync, // making php server and live reload
      watchFiles // watch files to change
    );

let defaultTask = series(
      clean, // cleaning folders
      build, // building app
      connectWatch // make php server and live reload, watching files to change
    );

exports.default  = defaultTask;
