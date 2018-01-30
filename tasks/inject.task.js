const inject = require('gulp-inject');
const config = require('./configuration');

module.exports = gulp => {
    // INJECT task is injecting all JS/CSS files into our html file
    gulp.task('inject', () => {
        return gulp.src('./dist/*.html')
            .pipe(inject(gulp.src([config.output.files.scriptProd, config.output.files.styleProd], {read: false}), {relative: true}))
            .pipe(gulp.dest(config.output.path.dist));
    });
};