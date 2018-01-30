// Configuration file

module.exports = {
    entry: {
        html: './src/**/*.html',
        script: './src/scripts/**/*.js',
        style: './src/styles/**/*.scss'
    },
    output: {
        path: {
            dist: './dist',
            style: './dist/styles',
            script: './dist/scripts'
        },
        files: {
            html: './dist/**/*.html',
            script: './dist/scripts/**/*.js',
            style: './dist/styles/**/*.css',
            scriptProd: './dist/**/*.js',
            styleProd: './dist/**/*.css'
        }
    },
    concat: {
        script: 'main.js',
        style: 'main.css'
    }
};