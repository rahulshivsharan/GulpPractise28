var gulp = require("gulp"), gutil = require("gulp-util");

gulp.task("default",function(){
	return gutil.log("My Gulp is running Successfully");
});
  

gulp.task("myTask01",function(){
	return gutil.log("Task \"myTask01\" is running....");
});


gulp.task("myTask02",function(){
	return gutil.log("Task \"myTask02\" is running....");
});

gulp.task("myTask03",function(){
	return gutil.log("Task \"myTask03\" is running....");
});

gulp.task("myTask04",function(){
	return gutil.log("Task \"myTask04\" is running....");
});

gulp.task("from2To4",["myTask02","myTask03","myTask04"]);
