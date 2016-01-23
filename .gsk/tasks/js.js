'use strict';

// MODULES
// ----------------------------------------------------------------------------
var path    = require('path');
var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var bs      = require('browser-sync');
var err     = require('../tools/errcb');
var ENV     = require('../tools/env').js;

var SRC  = [
  //path.join(ENV['src-dir'], 'lib', '**', '*'),
  path.join(ENV['src-dir'], '**', '*')
];
var DEST = ENV['dest-dir'];


// CONDITIONAL PIPELINE
// ----------------------------------------------------------------------------
var pipeline = require('../pipe/js/' + ENV.engine + '.js');


// TASK DEFINITION
// ----------------------------------------------------------------------------
// $ gulp js
// ----------------------------------------------------------------------------
// Gère toutes les actions d'assemblage JavaScript
gulp.task('js', ['test:js'], function () {
  return gulp.src(SRC)
    .pipe(plumber({ errorHandler: err }))
    .pipe(pipeline())
    .pipe(gulp.dest(DEST))
    .pipe(bs.stream());
});
