const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');
const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sourceMaps = require('gulp-sourcemaps');
const concatCss = require('gulp-concat-css');
const cssNano = require('gulp-cssnano');
const sass = require('gulp-sass');
const htmlmin = require('gulp-htmlmin');
const inject = require('gulp-inject');
const runSequence = require('run-sequence');
const ghPages = require('gulp-gh-pages');

gulp.task('default', ['serve']);

gulp.task('serve', ['build'], () => {
    browserSync.init({
        server: './dist'
    });
    gulp.watch('src/*.html', ['build']);
    gulp.watch('src/styles/**/*.scss', ['sass', 'inject']);
    gulp.watch('src/scripts/**/*.js', ['js', 'inject']);
});

require('./tasks/build.task')(gulp, runSequence);
require('./tasks/html.task')(gulp, browserSync, htmlmin);
require('./tasks/sass.task')(gulp, browserSync, sourceMaps, concatCss, cssNano, sass);
require('./tasks/javascript.task')(gulp, browserSync, babel, concat, uglify);
require('./tasks/inject.task')(gulp, inject);
require('./tasks/clean.task')(gulp, clean);
require('./tasks/deploy.task')(gulp, ghPages);