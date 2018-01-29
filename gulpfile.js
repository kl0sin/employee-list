const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const runSequence = require('run-sequence');
const ghPages = require('gulp-gh-pages');

$.loadSubtasks('./tasks/*.task.js', $);

// Default task
gulp.task('default', callback => {
    runSequence('clean', 'html', 'sass', 'js', 'inject', 'browser-sync', callback);
});

// Building production files
gulp.task('build', callback => {
    runSequence('clean', 'html', 'sass:prod', 'js:prod', 'inject', 'html:prod', callback);
});

// DEPLOY task is runing build task and then copying 'dist' folder into gh-pages branch on GitHub.com
gulp.task('deploy', ['build'], () => {
    return gulp.src('./dist/**/*')
        .pipe(ghPages());
});

