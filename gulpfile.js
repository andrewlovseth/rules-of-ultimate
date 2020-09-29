const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

function errorlog(err){
    console.error(err.message);
    this.emit('end');
}

function style() {

    return gulp.src('scss/rules.scss')
        .pipe(sass().on('error', errorlog))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.stream());
}

function watch() {
    gulp.watch('./scss/**/*.scss', style);
}

exports.style = style;
exports.watch = watch;