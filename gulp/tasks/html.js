const html = () => {
  return app.gulp.src(app.paths.src.html)
          .pipe(app.gulp.dest(app.paths.build.html))
}

export default html
