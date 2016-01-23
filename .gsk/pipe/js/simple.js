// Définition du LazyPipe pour utiliser compass
'use strict';

// MODULES
// ----------------------------------------------------------------------------
var lazypipe  = require('lazypipe');
var gulpif    = require('gulp-if');
//var concat    = require('gulp-concat');
var sourcemap = require('gulp-sourcemaps');
var uglify    = require('gulp-uglify');
var ENV       = require('../../tools/env');


module.exports = function () {
  return lazypipe()
    .pipe(sourcemap.init)
    //.pipe(concat, 'scripts.js')
    .pipe(function () {
      return gulpif(ENV.all.optimize, uglify());
    })
    .pipe(sourcemap.write, '.')();
};
