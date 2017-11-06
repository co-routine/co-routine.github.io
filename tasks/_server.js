'use strict'

import gulp from 'gulp'
import config from '../config'
import browserSync from 'browser-sync'

gulp.task('server', ['default'], () => {
  const serverSetting = {
    server: {
      port: 8080,
      baseDir: config.build.html,
      index: 'index.html',
    }
  }

  browserSync(serverSetting);
})

gulp.task('reload', () => {
  browserSync.reload()
})
