const inject = require('gulp-inject');

module.exports = gulp => {
    // INJECT task is injecting all JS/CSS files into our html file
    gulp.task('inject', () => {
        return gulp.src('./dist/*.html')
            .pipe(inject(gulp.src(['./dist/**/*.js', './dist/**/*css'], {read: false}), {relative: true}))
            .pipe(gulp.dest('./dist'));
    });
};