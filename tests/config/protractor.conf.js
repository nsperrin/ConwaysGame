/**
 * Created by Nick on 10/25/2016.
 */
exports.config = {
    seleniumServerJar: "../../node_modules/selenium/lib/runner/selenium-server-standalone-2.20.0.jar",
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        '../protractor/*.js'
    ],
    onPrepare: function() {
        var SpecReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'none'}));
    },
    allScriptsTimeout: 99999999,
    getPageTimeout: 99999999,
    seleniumPort: 4444,
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 99999999,
        isVerbose: true,
        includeStackTrace: false,
        print: function() {}
    },
    framework: 'jasmine'
};