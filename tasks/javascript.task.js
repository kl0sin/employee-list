const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

module.exports = gulp => {
    // JS task is throwing JavaScript files by babel and copying them to the new location
    gulp.task('js', () => {
        return gulp.src('./src/scripts/**/*.js')
            .pipe(babel())
            .pipe(gulp.dest('dist/scripts'))
            .pipe(browserSync.stream());
    });

    // JS:PROD task is throwing JavaScript files by babel, concat all files into one, uglify and copying to the new location
    gulp.task('js:prod', () => {
        return gulp.src('./src/scripts/**/*.js')
            .pipe(babel())
            .pipe(concat('main.js'))
            .pipe(uglify())
            .pipe(gulp.dest('./dist/'));
    });
};