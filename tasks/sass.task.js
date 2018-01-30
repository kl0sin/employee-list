const sourceMaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const concatCss = require('gulp-concat-css');
const cssNano = require('gulp-cssnano');
const config = require('./configuration');

module.exports = gulp => {
    // SASS taks is generating CSS files
    gulp.task('sass', () => {
        return gulp.src(config.entry.style)
            .pipe(sourceMaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(sourceMaps.write())
            .pipe(gulp.dest(config.output.path.style))
            .pipe(browserSync.stream());
    });

    // SASS:PROD task is generating CSS files, concat into one file and then minify file
    gulp.task('sass:prod', () => {
        return gulp.src(config.entry.style)
            .pipe(sass().on('error', sass.logError))
            .pipe(sourceMaps.write())
            .pipe(concatCss(config.concat.style))
            .pipe(cssNano())
            .pipe(gulp.dest(config.output.path.dist));
    });
};

