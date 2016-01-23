// Définition du LazyPipe pour linter JS
'use strict';

// MODULES
// ----------------------------------------------------------------------------
var lazypipe = require('lazypipe');
var jshint   = require('gulp-jshint');
var jscs     = require('gulp-jscs');

module.exports = function () {
  var lazystream = lazypipe()
    .pipe(jshint)
    .pipe(jshint.reporter, 'jshint-stylish')
    .pipe(jshint.reporter, 'fail')
    .pipe(jscs)
    .pipe(jscs.reporter)
    .pipe(jscs.reporter, 'fail');

  return lazystream();
};
