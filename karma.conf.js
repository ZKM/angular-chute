// Karma configuration
module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',

    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'app/bower_components/jquery/jquery.js',
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks-unstable/angular-mocks.js',

      'app/bower_components/lodash/lodash.js',
      'app/bower_components/jquery-bridget/jquery.bridget.js',
      'app/bower_components/get-style-property/get-style-property.js',
      'app/bower_components/get-size/get-size.js',
      'app/bower_components/eventEmitter/EventEmitter.js',
      'app/bower_components/eventie/eventie.js',
      'app/bower_components/doc-ready/doc-ready.js',
      'app/bower_components/matches-selector/matches-selector.js',
      'app/bower_components/outlayer/item.js',
      'app/bower_components/outlayer/outlayer.js',
      'app/bower_components/masonry/masonry.js',
      'app/bower_components/imagesloaded/imagesloaded.js',
      'app/bower_components/angular-resource-unstable/angular-resource.js',
      'app/bower_components/angular-masonry/angular-masonry.js',
      'app/bower_components/magnific-popup/dist/jquery.magnific-popup.js',

      'app/chute/chute.js',
      'app/chute/**/*.js',
      'test/chute/**/*.js'
    ],


    // list of files to exclude
    exclude: [],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit'
    reporters: ['dots', 'osx'],


    // web server port
    port: 9876,


    // cli runner port
    runnerPort: 9100,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 10000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    plugins:[
      "karma-jasmine",
      "karma-chrome-launcher",
      "karma-osx-reporter"
    ]

  })
}
