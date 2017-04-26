'use strict';

var gulp 			 = require('gulp');
var sass 			 = require('gulp-sass');
var webpackconfig 	 = require('./webpack.config.js');
var webpack 		 = require('gulp-webpack');
var uglify 			 = require('gulp-uglify');
var webserver 		 = require('gulp-webserver');
var argv             = require('yargs').argv;
var myRoute          = './www/';


gulp.task('webpack', function () {
    if(argv.ugly == 'true'){
        return gulp.src('')
   		.pipe(webpack(webpackconfig))
        .pipe(uglify())
   		.pipe(gulp.dest(myRoute+'/js/'));
    }else{
        return gulp.src('')
   		.pipe(webpack(webpackconfig))
   		.pipe(gulp.dest(myRoute+'/js/'));
    }
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
    gulp.watch('./scss/**/*.scss', ['sass']);
    gulp.watch(['./js/**/*.js','js/**/*.vue'], ['webpack']);
});

gulp.task('webserver',['watch'], function() {
  gulp.src('www')
    .pipe(webserver({
      port:'8089',
      livereload: true,
      open: true
    }));
});
