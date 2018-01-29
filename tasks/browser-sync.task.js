const browserSync = require('browser-sync').create();

module.exports = gulp => {
    gulp.task('browser-sync', () => {
        browserSync.init({
            server: './dist'
        });
        gulp.watch('src/*.html', ['build']);
        gulp.watch('src/styles/**/*.scss', ['sass', 'inject']);
        gulp.watch('src/scripts/**/*.js', ['js', 'inject']);
    });
};