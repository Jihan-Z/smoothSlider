const gulp       = require('gulp');
const sass       = require('gulp-sass');
const cleanCSS   = require('gulp-clean-css');
const eslint     = require('gulp-eslint');
const browserify = require('gulp-browserify');
const uglify     = require('gulp-uglify');
const livereload = require('gulp-livereload');
const notify     = require("gulp-notify");
const concat     = require("gulp-concat");

gulp.task('js', function () {
  gulp.src('./src/js/*.js')
    .pipe(browserify({
      transform: ['babelify']
    }))
    // .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
    .pipe(livereload())
    .pipe(notify('task "js" completed'));
});

gulp.task('eslint', function () {
  gulp.src('./src/js/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    // .pipe(eslint.failAfterError())
    .pipe(notify('task "eslint" completed'));
});

gulp.task('sass', function () {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/css'))
    .pipe(livereload())
    .pipe(notify('task "sass" completed'));
});


gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('./src/sass/**/*.scss', ['sass']);
  gulp.watch('./src/js/**/*.js', ['js', 'eslint']);
});

gulp.task('default', ['js', 'eslint', 'sass', 'watch']);
