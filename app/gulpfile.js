'use strict';

var gulp 			= require('gulp');
var sass 			= require('gulp-sass');
var webpackconfig 	= require('./webpack.config.js');
var webpack 		= require('gulp-webpack');
var uglify 			= require('gulp-uglify');
var myRoute     = './www/'


gulp.task('webpack', function () {
   return gulp.src('./js/main.js')
   		.pipe(webpack(webpackconfig))
   		.pipe(uglify())
   		.pipe(gulp.dest(myRoute+'/js/'));
});

gulp.task('sass', function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest(myRoute+'/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('watch', ['sass','webpack'],function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./js/**/*.js', ['webpack']);
});

gulp.task('default', function() {
    // Code for the default task
});

gulp.task('default', function() {
    // Code for the default task
});