module.exports = (gulp) => {
    const browserSync = require('browser-sync').create();
    const sourceMaps = require('gulp-sourcemaps');
    const concatCss = require('gulp-concat-css');
    const cssNano = require('gulp-cssnano');
    const sass = require('gulp-sass');

    gulp.task('sass', () => {
        return gulp.src('./src/styles/**/*.scss')
            .pipe(sourceMaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(sourceMaps.write())
            .pipe(gulp.dest('./dist/styles'))
            .pipe(browserSync.stream());
    });

    gulp.task('sass:prod', () => {
        return gulp.src('./src/styles/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(sourceMaps.write())
            .pipe(concatCss('main.css'))
            .pipe(cssNano())
            .pipe(gulp.dest('./dist/'));
    });
};