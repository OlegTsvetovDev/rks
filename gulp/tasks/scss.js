import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import rename from 'gulp-rename'
import cleanCss from 'gulp-clean-css'
import webpCss from 'gulp-webpcss' // установить также npm i -D webp-converter@2.2.3
import autoprefixer from 'gulp-autoprefixer'
import groupCssMediaQueries from 'gulp-group-css-media-queries'


const sass = gulpSass(dartSass)

const scss = () => {
  app.gulp.src(app.paths.src.css, { sourcemaps: true })
      .pipe(app.gulp.dest(app.paths.build.css))

  return app.gulp.src(app.paths.src.scss, { sourcemaps: true })
          .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
              title: 'SCSS',
              message: 'Error: <%= error.message %>'
            })
          ))
          .pipe(app.plugins.replace(/@img\//g, 'img/'))
          .pipe(sass({
            outputStyle: 'expanded'
          }))
          .pipe(groupCssMediaQueries())
          .pipe(webpCss({
            webpClass: '.webp',
            noWebpClass: '.no-webp'
          }))
          .pipe(autoprefixer({
            grid: true,
            overrideBrowserList: ['last 99 versions'],
            cascade: true
          }))
          .pipe(app.gulp.dest(app.paths.build.css))
          .pipe(cleanCss())
          .pipe(rename({
            extname: '.min.css'
          }))
          .pipe(app.gulp.dest(app.paths.build.css))
          .pipe(app.plugins.browserSync.stream())
}


export default scss
