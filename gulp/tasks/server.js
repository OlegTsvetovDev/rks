const server = () => {
  app.plugins.browserSync.init({
    server: {
      baseDir: `${app.paths.build.html}`
    },
    notify: false,
    startPath: 'lk_send_request_for_contract_ul.html',
    port: 3000
  })
}


export default server
