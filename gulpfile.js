import gulp from 'gulp'
import paths from './gulp/config/paths.js'
import cleanDist from './gulp/tasks/cleanDist.js'
import html from './gulp/tasks/html.js'
import copyFiles from './gulp/tasks/copyFiles.js'


// глобальные переменные (а реально нужны?)
global.app = {
  paths: paths,
  gulp: gulp,
}


// таски
const mainTasks = gulp.parallel(copyFiles, html)

// наблюдатели за сменой файлов для пересборки
function watcher() {
  gulp.watch(paths.watch.files, copyFiles)
  gulp.watch(paths.watch.html, html)
}

// сценарии
const dev = gulp.series(cleanDist, copyFiles, watcher)

gulp.task('default', dev)
