var gulp = require("gulp");
var concat = require("gulp-concat");
var jsmin = require("gulp-jsmin");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");

gulp.task("default", function() {
	return gulp.src([
		"src/client/app-config.js",
		"src/client/pages/homepage/homepageController.js",
		"src/client/pages/todopage/todoController.js",
		"src/client/pages/todopage/todoFactory.js",
		"src/client/app-config.js"
	])
	.pipe(concat("script.min.js"))
//	.pipe(jsmin())
	/*
	.pipe(uglify().on("error", function(e){
		console.log(e);
	})) */
	.pipe(gulp.dest("public")); 
});

/*
var gulp = require('gulp');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
 
//gulp.src(['src/++/+.js', '!src/client/bower_components/+'])

gulp.task('default', function () {
    //gulp.src('src/++/+.js')
	gulp.src(['src/++/+.js', '!src/client/bower_components/+'])    
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('public'));
});*/