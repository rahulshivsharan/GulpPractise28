var gulp = require("gulp"), 
    gutil = require("gulp-util"),
    inject = require("gulp-inject");

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

gulp.task("fileTask",function(){
	gulp.src("./src/*.js").pipe(gulp.dest('./dest'));
	return gutil.log("In the task \"fileTask\"");
});

gulp.task("fileWatcher",function(){
	var watcher = gulp.watch("src/myFile01.js");
	watcher.on("change",function(event){
		console.log("File "+event.path+" was "+event.type+", running task");
	});
	return gutil.log("In the task \"fileWatcher\"");
});

gulp.task("injectTask",function(){
	var target = gulp.src("./src/index.html");
	var sources = gulp.src(["./src/*.js"],{read : false});
	return target.pipe(inject(sources)).pipe(gulp.dest("./src"));	
});
