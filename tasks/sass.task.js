const sourceMaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const concatCss = require('gulp-concat-css');
cssNano = require('gulp-cssnano');

module.exports = gulp => {
    // SASS taks is generating CSS files
    gulp.task('sass', () => {
        return gulp.src('./src/styles/**/*.scss')
            .pipe(sourceMaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(sourceMaps.write())
            .pipe(gulp.dest('./dist/styles'))
            .pipe(browserSync.stream());
    });

    // SASS:PROD task is generating CSS files, concat into one file and then minify file
    gulp.task('sass:prod', () => {
        return gulp.src('./src/styles/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(sourceMaps.write())
            .pipe(concatCss('main.css'))
            .pipe(cssNano())
            .pipe(gulp.dest('./dist/'));
    });
};

