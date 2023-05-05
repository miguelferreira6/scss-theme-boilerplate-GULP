'use strict';

const browsersync = require("browser-sync").create();
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

const del = require("del");

const styleSRC = 'src/scss/**/*.scss';
const styleDIST = './dist/css/';

function compileStyles() {

    return gulp.src(styleSRC).pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browserslistrc: ['last 3 versions', 'ie >= 11', '> 5%'],
            cascade: false
        }))
        /*.pipe(sourcemaps.write('./maps'))*/
        .pipe(gulp.dest(styleDIST));
}

function clean() {
    return del([styleDIST]);
}

function watchFiles() {
    gulp.watch('./src/scss/**/*.scss', compileStyles);
}

const watch = gulp.series(clean, gulp.parallel(watchFiles, compileStyles));

module.exports = {
    style: compileStyles,
    clean: clean,
    watch: watch,
    default: watch
}