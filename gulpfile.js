const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const runSequence = require('run-sequence');

$.loadSubtasks('./tasks/*.task.js', $);

// Default task
gulp.task('default', callback => {
    runSequence('clean', 'html', 'sass', 'js', 'inject', 'browser-sync', callback);
});

// Building production files
gulp.task('build', callback => {
    runSequence('clean', 'html', 'sass:prod', 'js:prod', 'inject', 'html:prod', callback);
});

