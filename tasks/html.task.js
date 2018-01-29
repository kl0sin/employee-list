const browserSync = require('browser-sync').create();
const htmlmin = require('gulp-htmlmin');

module.exports = gulp => {
    // HTML task for dev usage. Moving .html files into the new location
    gulp.task('html', () => {
        return gulp.src('./src/**/*.html')
            .pipe(gulp.dest('./dist'))
            .pipe(browserSync.stream());
    });

    // HTML:PROD task is minify our html files, removing all whitespaces
    gulp.task('html:prod', () => {
        return gulp.src('./dist/**/*.html')
            .pipe(htmlmin({removeComments: true, collapseWhitespace: true}))
            .pipe(gulp.dest('./dist'))
    });
};