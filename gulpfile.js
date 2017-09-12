var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var KarmaServer = require('karma').Server;
var jsonServer = require("gulp-json-srv").create();

gulp.task('default', function() {
    console.log("Staring gulp default ...");
});

gulp.task("startjson", function(){
    return gulp.src("data.json")
        .pipe(jsonServer.pipe());
});

/**
 * Run test once and exit
 */
gulp.task('karma', function (done) {
  new KarmaServer({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task("test", ["startjson", "karma"], function() {
  jsonServer.kill();
});