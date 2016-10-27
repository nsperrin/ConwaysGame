/**
 * Created by Nick on 10/27/2016.
 */
module.exports = function(config) {
    config.set({
        basePath: '../..',
        frameworks: ['jasmine'],
        files: [
            'public/javascripts/conway.js',
            'tests/karma-jasmine/*.js'
        ],
        exclude: [
        ],
        preprocessors: {},
        plugins : [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-mocha-reporter'
        ],
        reporters: [
            'mocha'
        ],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true
    });
};