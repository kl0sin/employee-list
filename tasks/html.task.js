const browserSync = require('browser-sync').create();
const htmlmin = require('gulp-htmlmin');
const config = require('./configuration');

module.exports = gulp => {
    // HTML task for dev usage. Moving .html files into the new location
    gulp.task('html', () => {
        return gulp.src(config.entry.html)
            .pipe(gulp.dest(config.output.path.dist))
            .pipe(browserSync.stream());
    });

    // HTML:PROD task is minify our html files, removing all whitespaces
    gulp.task('html:prod', () => {
        return gulp.src(config.output.files.html)
            .pipe(htmlmin({removeComments: true, collapseWhitespace: true}))
            .pipe(gulp.dest(config.output.path.dist))
    });
};