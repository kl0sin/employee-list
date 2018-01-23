module.exports = (gulp, clean) => {
    gulp.task('clean', () => {
        return gulp.src('./dist/*', {read: false})
            .pipe(clean());
    });
};