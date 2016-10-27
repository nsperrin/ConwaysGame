/**
 * Created by Nick on 10/25/2016.
 */
var gulp = require('gulp'),
    gulpProtractorAngular = require('gulp-angular-protractor');

var Server = require('karma').Server;

gulp.task('protractor', function(callback) {
    gulp
        .src(['tests/protractor/*.js'])
        .pipe(gulpProtractorAngular({
            'configFile': 'tests/config/protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true
        }))
        .on('error', function(e) {
            console.log(e);
        })
        .on('end', callback);
});

gulp.task('karma', function (done) {
    new Server({
        configFile: __dirname + '\\tests\\config\\karma.conf.js',
        singleRun: true
    }, done).start();
});
