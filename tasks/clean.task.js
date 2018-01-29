const clean = require('gulp-clean');

// Cleaning the 'dist' folder content
module.exports = gulp => {
    gulp.task('clean', () => {
        return gulp.src('./dist/*', {read: false})
            .pipe(clean());
    });
};