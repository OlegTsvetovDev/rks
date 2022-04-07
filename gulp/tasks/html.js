import fileInclude from 'gulp-file-include'
import webpHtmlNoSvg from 'gulp-webp-html-nosvg'
import versionNumber from 'gulp-version-number'


const html = () => {
  return app.gulp.src(app.paths.src.html)
          .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
              title: 'HTML',
              message: 'Error: <%= error.message %>'
            })
          ))
          .pipe(fileInclude())
          .pipe(app.plugins.replace(/@img\//g, 'img/'))
          .pipe(webpHtmlNoSvg())
          .pipe(versionNumber({
            'value': '%DT%',
            'append': {
              'key': '_v',
              'cover': 0,
              'to': [ 'css', 'js' ]
            },
            output: {
              'file': 'gulp/version.json'
            }
          }))
          .pipe(app.gulp.dest(app.paths.build.html))
          .pipe(app.plugins.browserSync.stream())
}


export default html
