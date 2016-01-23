'use strict';

// MODULES
// ----------------------------------------------------------------------------
var gulp = require('gulp');
var bs   = require('browser-sync');
var ENV  = require('../tools/env').connect;


// TASK DEFINITION
// ----------------------------------------------------------------------------
// $ gulp connect
// ----------------------------------------------------------------------------
// Lance un serveur pour voir le site statique produit
// Le site peut être vu en même temps sur plusieurs navigateur (y compris
// mobiles) la navigation sera automatiquement synchronisée grâce à BrowserSync.
//
// Pour activer HTTPS, ajoutez le paramètre `https:true` dans la configuration
// d'initialisation de browser-sync.
gulp.task('connect', function () {
  bs.init({
    port: ENV.port,
    open: ENV.open,
    server: {
      baseDir: './build'
    },
    ghostMode: {
      clicks: true,
      forms : true,
      scroll: true
    },
    reloadDebounce: 200,
    https: false
  });
});
