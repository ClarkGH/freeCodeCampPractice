var gulp       = require('gulp'),
    gulp-util  = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    sass       = require('gulp-sass');

gulp.task('default', ['watch']);

gulp.task('build-css', function() {
  return gulp.src('source/scss/**/*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(output.stylesheets));
});

gulp.task('watch', function() {
  gulp.watch(input.sass, ['build-css']);
});