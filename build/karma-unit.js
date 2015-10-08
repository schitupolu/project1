// Karma configuration
// Generated on Wed May 28 2014 12:03:00 GMT-0700 (Pacific Daylight Time)

module.exports = function(config) {
  config.set({

    /**
     * From where to look for files, starting with the location of this file.
     */
    basePath: '../',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],
    plugins: [ 'karma-jasmine', 'karma-firefox-launcher', 'karma-chrome-launcher', 'karma-phantomjs-launcher',
      'karma-coffee-preprocessor','karma-junit-reporter','karma-htmlfile-reporter'],

    // list of files / patterns to load in the browser
    /**
     * This is the list of file patterns to load into the browser during testing.
     */
    files: [
    'vendor/jquery/dist/jquery.min.js',
      'vendor/angular/angular.min.js',
      'vendor/angular-animate/angular-animate.min.js',
      'vendor/angular-cookies/angular-cookies.min.js',
      'vendor/angular-resource/angular-resource.min.js',
      'vendor/angular-sanitize/angular-sanitize.min.js',
      'vendor/angular-touch/angular-touch.min.js',
      'vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'vendor/bootstrap/dist/js/bootstrap.min.js',
      'vendor/angular-ui-router/release/angular-ui-router.js',
      'vendor/angular-ui-grid/ui-grid.min.js',
      'build/templates-app.js',
      'build/templates-common.js',
      'vendor/angular-mocks/angular-mocks.js',
      
  'src/**/*.js',
      'src/**/*.coffee',
  ],


  // list of files to exclude
  exclude: [
    'src/assets/**/*.js'
  ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
      preprocessors: {
    '**/*.coffee': 'coffee',
  },


  // test results reporter to use
  // possible values: 'dots', 'progress'
  // available reporters: https://npmjs.org/browse/keyword/karma-reporter
  reporters: ['progress', 'html'],
      htmlReporter: {
    outputFile: 'tests/test-results.html'
  },

  // web server port
  port: 9018,
      runnerPort: 9100,
      urlRoot: '/',


    // enable / disable colors in the output (reporters and logs)
      colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
      logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
      autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
      browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
      singleRun: true
});
};
