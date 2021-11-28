'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

gulp.task('sass', () => 
  gulp.src('./src/assets/scss/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./src/assets/css'))
);

gulp.task('default', gulp.series( function() {
  gulp.watch(['./src/assets/scss/*.scss'], gulp.parallel(['sass']));
}));
