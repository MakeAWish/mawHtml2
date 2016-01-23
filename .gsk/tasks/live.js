'use strict';

// MODULES
// ----------------------------------------------------------------------------
var gulp   = require('gulp');
var runner = require('run-sequence');


// TASK DEFINITION
// ----------------------------------------------------------------------------
// $ gulp live
// ----------------------------------------------------------------------------
// Définie un watcher pour tous les fichiers et lance un serveur statique pour
// voir le contenu du répertoire `/build`. Ce serveur utilise BrowserSync pour
// rafraîchir automatiquement le navigateur dès qu'un fichier est mis à jour.
gulp.task('live', function (cb) {
  runner('build', ['connect', 'watch'], cb);
});
