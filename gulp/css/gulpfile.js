const {series} = require ('gulp')
const gulp = require ('gulp')
const sass = require ('gulp-sass')
const uglifycss = require ('gulp-concat')

function transformacaoCss(){
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({"uglyComments": true}))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

exports.default = series(transformacaoCss)