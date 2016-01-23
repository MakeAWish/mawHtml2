'use strict';

// MODULES
// ----------------------------------------------------------------------------
var gulp   = require('gulp');
var del    = require('del');
var runner = require('run-sequence');


// TASK DEFINITION
// ----------------------------------------------------------------------------
// $ gulp build:clean
// ----------------------------------------------------------------------------
// Supprime le contenu du build
gulp.task('build:clean', function () {
  return del(['build/**/*']);
});

// $ grunt build
// ----------------------------------------------------------------------------
// Régénère le contenu du dossier `/build`. Il est recommandé de lancer cette
// tache à chaque fois que l'on réalise un `git pull` du projet.
gulp.task('build', function (cb) {
  runner('build:clean', ['assets', 'css', 'js', 'html'], 'doc', cb);
});
