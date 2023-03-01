const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const terser = require('gulp-terser');

function styleDev() {
  return gulp.src('src/style/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest('dist/'));
}
function styleProd() {
  return gulp.src('src/style/index.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest('dist/'));
}

function script(){
  return gulp.src('./src/script/index.js')
    .pipe(terser({
      compress: true,
      mangle: true
    }))
    .pipe(gulp.dest('dist/'));
}

exports.script = script;
exports.styleDev = styleDev;
exports.styleProd = styleProd;
