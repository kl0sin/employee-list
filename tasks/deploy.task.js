module.exports = (gulp, ghPages) => {
    gulp.task('deploy', ['build:prod'], function() {
        return gulp.src('./dist/**/*')
            .pipe(ghPages());
    });
};