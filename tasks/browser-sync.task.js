const browserSync = require('browser-sync').create();
const config = require('./configuration');

module.exports = gulp => {
    gulp.task('browser-sync', () => {
        browserSync.init({
            server: config.output.path.dist
        });
        gulp.watch(config.entry.html, ['build']);
        gulp.watch(config.entry.style, ['sass', 'inject']);
        gulp.watch(config.entry.script, ['js', 'inject']);
    });
};