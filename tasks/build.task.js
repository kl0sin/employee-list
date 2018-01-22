module.exports = (gulp) => {
    const runSequence = require('run-sequence');

    gulp.task('build', callback => {
        runSequence('clean', 'html', 'sass', 'js', 'inject', callback);
    });

    gulp.task('build:prod', callback => {
        runSequence('clean', 'html', 'sass:prod', 'js:prod', 'inject', 'html:prod', callback);
    });
};