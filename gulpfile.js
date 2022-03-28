const { src, dest, task, series, parallel, watch } = require('gulp')
const { readFileSync, writeFile, readdir, appendFile } = require('fs') // file system
const cleanDist = require('del') // delete directories
const sass = require('gulp-sass') // convert scss to css
const cssAutoprefixer = require('gulp-autoprefixer') // auto vendor prefixes
const cssMinify = require('gulp-clean-css') // css minifier
const cssGroupQueries = require('gulp-group-css-media-queries') // grouping media queries in css
const jsBabel = require('gulp-babel') // babel
const jsMinify = require('gulp-uglify') // js minify
const fileRename = require('gulp-rename') // rename files
const imageMin = require('gulp-imagemin') // compress images w/o quality loss
const otf2ttf = require('gulp-fonter') // convert otf format to ttf
const ttf2woff = require('gulp-ttf2woff') // convert ttf format to woff
const ttf2woff2 = require('gulp-ttf2woff2') // convert ttf format to woff2
const mergeStream = require('merge-stream') // merging multiple src
const includeFiles = require('gulp-file-include') // file includes via @@
const ifElse = require('gulp-if-else') // if cond for pipes
const browserSync = require('browser-sync') // livereload in browser
const phpConnect = require('gulp-connect-php') // php server connection

const preOptimize = {
        self:   '_preOptimize/',
        fonts:  '_preOptimize/fonts/',
        otfSrc: '_preOptimize/fonts/**/*.otf',
        ttfSrc: '_preOptimize/fonts/**/*.ttf',
        imgSrc: '_preOptimize/img/**/*.{jpg,png,svg,webp,gif,ico}',
      }
const srcFolder = {
        self:      'src/',
        html:      'src/**/!(_*)*.html',
        php:       'src/**/!(_*)*.php',
        css:       'src/scss/**/!(_*)*.scss',
        cssMin:    'src/scss/**/!(_*)*.min.css',
        js:        'src/js/**/!(*min)*.js',
        jsMin:     'src/js/**/*.min.js',
        fontsSrc:  'src/fonts/',
        fonts:     'src/fonts/**/*.{ttf,woff,woff2}',
        fontsFile: 'src/scss/_fonts.scss',
        imgSrc:    'src/img/',
        img:       'src/img/**/*.*',
        htaccess:  '*.htaccess',
        sitemap:   '**/*sitemap*.xml'
      }
const  projectFolder = {
        self:  'dist/',
        html:  'dist/',
        php:   'dist/',
        css:   'dist/css/',
        js:    'dist/js/',
        fonts: 'dist/fonts/',
        img:   'dist/img/'
      }
const cleanFolder = {
        all: 'dist/**/*.*'
      }

// convert otf 2 ttf
function otfConvert() {
  return src(preOptimize.otfSrc)
          .pipe(otf2ttf({ formats: ['ttf']}))
          .pipe(dest(preOptimize.fonts));
}

function otfDestroy() {
  return cleanDist(preOptimize.otfSrc)
}

let ttf = series(otfConvert, otfDestroy);

// image and fonts optimization and compressing before running project
// from src/_preOptimize/ folder to src/ folder
// file/folder structure should be the same as src/ folder
function optimizeFontsImg() {
  // ttf 2 woff
  let woff =  src(preOptimize.ttfSrc)
               .pipe(dest(srcFolder.fontsSrc))
               .pipe(ttf2woff())
               .pipe(dest(srcFolder.fontsSrc))
  // ttf 2 woff2
  let woff2 = src(preOptimize.ttfSrc)
              .pipe(ttf2woff2())
              .pipe(dest(srcFolder.fontsSrc))
  // compressing images
  let img =  src(preOptimize.imgSrc)
              .pipe(imageMin({}))
              .pipe(dest(srcFolder.imgSrc))

  return mergeStream(woff, woff2, img)
}

exports.optimize = series(
                      ttf,
                      optimizeFontsImg
                    );

// cleaning folders
function clean() {
  return cleanDist(cleanFolder.all)
}

// building html
function html() {
  return src(srcFolder.html)
          .pipe(includeFiles())
          .pipe(dest(projectFolder.html))
          .pipe(browserSync.stream())
}

// building php
function php() {
  return src(srcFolder.php)
          .pipe(includeFiles())
          .pipe(dest(projectFolder.php))
          .pipe(browserSync.stream())
}

// building images
function img() {
  return src(srcFolder.img)
          .pipe(dest(projectFolder.img))
          .pipe(browserSync.stream())
}

// building fonts
function fonts() {
  return src(srcFolder.fonts)
          .pipe(dest(projectFolder.fonts))
          .pipe(browserSync.stream())
}

// watching files' changes
function watchFiles() {
  watch([srcFolder.html], html)
  watch([srcFolder.php], php)
  watch([srcFolder.css], css)
  watch([srcFolder.js], js)
  watch([srcFolder.img], img)
  return watch([srcFolder.fonts], fonts)
}

// starting php server and live reload
function connectSync() {
  return phpConnect.server(
         {
           base: projectFolder.self,
         },
         function() {
            browserSync({
              proxy: '127.0.0.1:8000',
              notify: false,
              startPath: 'lk_send_request_for_contract_ul.html'
            })
         })
}

// building css
function css() {
  let minFiles = src(srcFolder.cssMin)
                 .pipe(dest(projectFolder.css))

  let fullFiles = src(srcFolder.css)
                 .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
                 .pipe(cssAutoprefixer('last 99 versions'))
                 .pipe(cssGroupQueries())
                 .pipe(dest(projectFolder.css))
                 .pipe(cssMinify())
                 .pipe(fileRename({ extname: '.min.css' }))
                 .pipe(dest(projectFolder.css))
                 .pipe(browserSync.stream())

  return mergeStream(minFiles, fullFiles)
}

// building js
function js() {
  let minFiles = src(srcFolder.jsMin)
                 .pipe(dest(projectFolder.js))

  let fullFiles = src(srcFolder.js)
                  .pipe(jsBabel({
                    presets: ['@babel/preset-env']
                  }))
                  .pipe(dest(projectFolder.js))
                  .pipe(jsMinify())
                  .pipe(fileRename({
                    extname: '.min.js'
                  }))
                  .pipe(dest(projectFolder.js))
                  .pipe(browserSync.stream())

  return mergeStream(minFiles, fullFiles)
}

let build = parallel(
      html, // build html files
      php, // build php files
      css, // build css files
      js, // build js files
      img, // build img files
      fonts // build fonts files
    )

let connectWatch = parallel(
      connectSync, // making php server and live reload
      watchFiles // watch files to change
    )

let defaultTask = series(
      clean, // cleaning folders
      build, // building app
      connectWatch // make php server and live reload, watching files to change
    )

exports.default = defaultTask;
