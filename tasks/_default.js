'use strict';

import gulp from 'gulp'
import config from '../config'

gulp.task('default', [], () => {
  console.log('gulp runnning.');

  gulp.watch(config.source.html + '**/*.pug', ['reload', 'pug']);
  gulp.watch(config.source.stylesheets + '**/*.scss', ['reload', 'sass']);
  gulp.watch(config.source.javascripts.path + '**/*.js', ['reload', 'webpack']);
});
