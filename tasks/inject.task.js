module.exports = (gulp) => {
    const inject = require('gulp-inject');

    gulp.task('inject', () => {
        return gulp.src('./dist/*.html')
            .pipe(inject(gulp.src(['./dist/**/*.js', './dist/**/*css'], {read: false}), {relative: true}))
            .pipe(gulp.dest('./dist'));
    });
};