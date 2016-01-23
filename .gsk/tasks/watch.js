'use strict';

// MODULES
// ----------------------------------------------------------------------------
var path = require('path');
var gulp = require('gulp');
var ENV  = require('../tools/env');


// WATCH CONFIGURATION
// ----------------------------------------------------------------------------
var W = [
  {tasks: ['html'],   files: [].concat(
    path.join(ENV.html['src-dir'],  '**', '*'),
    path.join(ENV.html['data-dir'], '**', '*')
  )},
  {tasks: ['css'],    files: path.join(ENV.css['src-dir'],    '**', '*')},
  {tasks: ['js'],     files: path.join(ENV.js['src-dir'],     '**', '*')},
  {tasks: ['images'], files: path.join(ENV.images['src-dir'], '**', '*')}
];


// TASK DEFINITION
// ----------------------------------------------------------------------------
// $ gulp watch
// ----------------------------------------------------------------------------
// Configuration de tous les watcher du projet
gulp.task('watch', function () {
  W.forEach(function (obj) {
    gulp.watch(obj.files, obj.tasks);
  });
});
