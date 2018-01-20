const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const runSequence = require('run-sequence');
const sourceMaps = require('gulp-sourcemaps');
const inject = require('gulp-inject');
const clean = require('gulp-clean');
const babel = require('gulp-babel');

gulp.task('serve', ['build'], () => {
    browserSync.init({
        server: './dist'
    });
    gulp.watch('src/*.html', ['html']);
    gulp.watch('src/styles/**/*.scss', ['sass', 'inject']);
    gulp.watch('src/scripts/**/*.js', ['js', 'inject']);
});

gulp.task('build', callback => {
    runSequence('clean', 'html', 'sass', 'js', 'inject', callback);
});

gulp.task('html', () => {
    return gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream());
});

gulp.task('sass', () => {
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sourceMaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('./dist/styles'))
        .pipe(browserSync.stream());
});

gulp.task('js', () => {
    return gulp.src('./src/scripts/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist/scripts'))
        .pipe(browserSync.stream());
});

gulp.task('inject', () => {
    return gulp.src('./dist/*.html')
        .pipe(inject(gulp.src(['./dist/**/*.js', './dist/**/*css'], {read: false}), {relative: true}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('clean', () => {
    return gulp.src('./dist/*', {read: false})
        .pipe(clean());
});

gulp.task('default', ['serve']);