/**
 * Created by Rober on 30/05/15.
 */
var gulp = require('gulp');
var args = require('yargs').argv;
var config = require('./gulp.config')();
var del = require('del');

var $ = require('gulp-load-plugins')({lazy: true});

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

gulp.task('styles', ['clean-styles'] , function() {
    console.log('Compiling Less ---> CSS');
    return gulp
        .src(config.less)
        .pipe($.plumber())
        .pipe($.less())
        //.on('error',errorLogger())
        .pipe($.autoprefixer({browsers:['last 2 versions', '> 5%']}))
        .pipe(gulp.dest(config.temp));
});

gulp.task('clean-styles', function(done) {
    console.log('Cleaning files');
    var files = config.temp + '**/*.css';
    clean(files,done);

});

gulp.task('less-watcher',function(){
    gulp.watch([config.less],['styles']);
});


///////////
//function errorLogger(error){
//    console.log('****** Start of Error ******');
//    console.log(error);
//    console.log('****** End of Error ******');
//    this.emit('end');
//}

function clean(path,done) {
    console.log('Cleaning files: ' + path);
    del(path,done);
}
