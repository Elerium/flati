var path = require('path');
var gulp = require('gulp');
var rename = require('gulp-rename');
var clean = require('gulp-rimraf');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

var rootDir = __dirname;
var srcDir = path.join(rootDir, 'src');
var distDir = path.join(rootDir, 'dist');

var src = path.join(srcDir, 'flati.js');

gulp.task('check', function() {
	gulp.src(src)
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));
});

gulp.task('clean', function() {
	gulp.src(path.join(distDir, '**', '*.js'))
		.pipe(clean());
});

gulp.task('compile', ['clean'], function() {
	gulp.src(src).pipe(gulp.dest(distDir));
	gulp.src(src).pipe(uglify()).pipe(rename('flati.min.js')).pipe(gulp.dest(distDir));
});

gulp.task('build', ['check', 'compile']);