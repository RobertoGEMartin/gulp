/**
 * Created by Rober on 30/05/15.
 */
var gulp = require('gulp');
var args = require('yargs').argv;
var $ = require('gulp-load-plugins')({lazy: true});
var config = require('./gulp.config')();

//var jshint = require('gulp-jshint');
//var jscs = require('gulp-jscs');
//var gulputil = require('gulp-util');
//var gulpprint = require('gulp-print');
//var gulpif = require('gulp-if');

gulp.task('vet', function() {
    console.log('Analyzing source with JSHint and JSCS');
    return gulp
        .src(config.alljs)
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'), {verbose: true})
        .pipe($.jshint.reporter('fail'));
});

gulp.task('styles', function() {
    console.log('Compiling Less ---> CSS');
    return gulp
        .src(config.less)
        .pipe($.less())
        .pipe($.autoprefixer({browsers:['last 2 versions', '> 5%']}))
        .pipe(gulp.dest(config.temp));
});
