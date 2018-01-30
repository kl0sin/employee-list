const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const config = require('./configuration');

module.exports = gulp => {
    // JS task is throwing JavaScript files by babel and copying them to the new location
    gulp.task('js', () => {
        return gulp.src(config.entry.script)
            .pipe(babel())
            .pipe(gulp.dest(config.output.path.script))
            .pipe(browserSync.stream());
    });

    // JS:PROD task is throwing JavaScript files by babel, concat all files into one, uglify and copying to the new location
    gulp.task('js:prod', () => {
        return gulp.src(config.entry.script)
            .pipe(babel())
            .pipe(concat(config.concat.script))
            .pipe(uglify())
            .pipe(gulp.dest(config.output.path.dist));
    });
};