module.exports = (gulp, browserSync, babel, concat, uglify) => {
    gulp.task('js:prod', () => {
        return gulp.src('./src/scripts/**/*.js')
            .pipe(babel())
            .pipe(concat('main.js'))
            .pipe(uglify())
            .pipe(gulp.dest('./dist/'));
    });

    gulp.task('js', () => {
        return gulp.src('./src/scripts/**/*.js')
            .pipe(babel())
            .pipe(gulp.dest('dist/scripts'))
            .pipe(browserSync.stream());
    });
};