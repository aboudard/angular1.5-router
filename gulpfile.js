var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var Server = require('karma').Server;

gulp.task('default', function() {
    console.log("Staring gulp default ...");
});

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});