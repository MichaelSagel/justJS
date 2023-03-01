const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const terser = require('gulp-terser');

function style(compress = false) {
  return gulp.src('src/style/index.scss')
    .pipe(sass({outputStyle: compress ? 'compressed' : undefined}).on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: !compress
    }))
    .pipe(gulp.dest('dist/'));
}

function script(compress = false) {
  return gulp.src('./src/script/index.js')
    .pipe(terser({
      compress: compress,
      mangle: compress
    }))
    .pipe(gulp.dest('dist/'));
}

exports.dev = gulp.parallel(() => style(false), () => script(false));
exports.prod = gulp.parallel(() => style(true), () => script(true));
exports.watch = function() {
  gulp.watch('src/**/*', () => style(false));
  gulp.watch('src/**/*', () => script(false));
}

