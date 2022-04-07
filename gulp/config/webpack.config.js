const isBuild = process.argv.includes('--build')
const webpackConfig = {
  mode: isBuild ? 'production' : 'development',
  entry: {
    'jquery-3.5.1.min': './src/js/jquery-3.5.1.min.js',
    'slick.min': './src/js/slick.min.js',
    'jquery-ui.min': './src/js/jquery-ui.min.js',
    'datepicker-ru.min': './src/js/datepicker-ru.min.js',
    'jquery.maskedinput.min': './src/js/jquery.maskedinput.min.js',
    'lk_send_request': `./src/js/lk_send_request.js`,
    'lk_requests': `./src/js/lk_requests.js`,
    'lk_reg': `./src/js/lk_reg.js`,
    'lk_alert': './src/js/lk_alert.js',
    'lk_auth': './src/js/lk_auth.js',
    'lk_reg': './src/js/lk_reg.js',
    'lk_request_fileinput': './src/js/lk_request_fileinput.js',
    'lk_settings_fileinput': './src/js/lk_settings_fileinput.js',
    'lk_settings': './src/js/lk_settings.js',
    // '': './src/js/',
  },
  output: {
    filename: '[name].js'
  }
}


export { webpackConfig }
