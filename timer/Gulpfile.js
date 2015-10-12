var gulp       = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    sass       = require('gulp-sass');

gulp.task('default', ['watch']);

gulp.task('build-css', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/styles/'));
});

gulp.task('watch', function() {
  gulp.watch('./src/scss/**/*.scss', ['build-css']);
});