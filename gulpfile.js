const gulp = require('gulp');
var uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const minify = require('gulp-minify');


gulp.task('js', async function() {
   return gulp.src('./src/js/**/*.js', { allowEmpty: true })
   .pipe(concat('bizim.js'))
   .pipe(minify({noSource: true}))
   .pipe(gulp.dest('dist/js'))
});