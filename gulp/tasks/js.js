import versionNumber from 'gulp-version-number'
import webpack from 'webpack-stream'


const js = () => {
  return app.gulp.src(app.paths.src.js, { sourcemaps: true })
          .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
              title: 'JS',
              message: 'Error: <%= error.message %>'
            })
          ))
          .pipe(webpack({
            mode: 'production',
            entry: {
              'lk_send_request': `./src/js/lk_send_request.js`,
              'lk_requests': `./src/js/lk_requests.js`,
              'lk_reg': `./src/js/lk_reg.js`,
              'jquery-3.5.1.min': './src/js/jquery-3.5.1.min.js',
              'slick': './src/js/slick.js',
              'jquery-ui': './src/js/jquery-ui.min.js',
              'datepicker-ru': './src/js/datepicker-ru.js',
              'jquery.maskedinput': './src/js/jquery.maskedinput.js',
              // '': './src/js/',
            },
            output: {
              filename: '[name].js'
            }
          }))
          .pipe(app.plugins.replace(/@img\//g, 'img/'))
          .pipe(versionNumber({
            'value': '%DT%',
            'append': {
              'key': '_v',
              'cover': 0,
              'to': [ 'css', 'js' ]
            }
          }))
          .pipe(app.gulp.dest(app.paths.build.js))
          .pipe(app.plugins.browserSync.stream())
}


export default js
