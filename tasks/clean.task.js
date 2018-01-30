const clean = require('gulp-clean');
const config = require('./configuration');

// Cleaning the 'dist' folder content
module.exports = gulp => {
    gulp.task('clean', () => {
        return gulp.src(config.output.path.dist, {read: false})
            .pipe(clean());
    });
};