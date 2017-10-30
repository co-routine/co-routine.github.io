'use strict';

import gulp from 'gulp'
import config from '../config'

gulp.task('default', [], () => {
  console.log('gulp runnning.');

  gulp.watch(config.source.html + '**/*.pug', ['pug', 'reload']);
  gulp.watch(config.source.stylesheets + '**/*.scss', ['sass', 'reload']);
  gulp.watch(config.source.javascripts.path + '**/*.js', ['webpack', 'reload']);
});
