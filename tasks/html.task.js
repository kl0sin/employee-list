module.exports = (gulp) => {
    const browserSync = require('browser-sync').create();
    const htmlmin = require('gulp-htmlmin');

    gulp.task('html', () => {
        return gulp.src('./src/**/*.html')
            .pipe(gulp.dest('./dist'))
            .pipe(browserSync.stream());
    });

    gulp.task('html:prod', () => {
        return gulp.src('./dist/**/*.html')
            .pipe(htmlmin({removeComments: true, collapseWhitespace: true}))
            .pipe(gulp.dest('./dist'))
    });
};