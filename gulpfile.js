const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('default', ['serve']);

gulp.task('serve', ['build'], () => {
    browserSync.init({
        server: './dist'
    });
    gulp.watch('src/*.html', ['html']);
    gulp.watch('src/styles/**/*.scss', ['sass', 'inject']);
    gulp.watch('src/scripts/**/*.js', ['js', 'inject']);
});

require('./tasks/build.task')(gulp);
require('./tasks/html.task')(gulp);
require('./tasks/sass.task')(gulp);
require('./tasks/javascript.task')(gulp);
require('./tasks/inject.task')(gulp);
require('./tasks/clean.task')(gulp);
