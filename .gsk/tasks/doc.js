'use strict';

// MODULES
// ----------------------------------------------------------------------------
var fs       = require('fs');
var path     = require('path');
var exec     = require('child_process').exec;
var runner   = require('run-sequence');
var gulp     = require('gulp');
var gutil    = require('gulp-util');
var newer    = require('gulp-newer');
var marked   = require('gulp-marked');
var wrapper  = require('gulp-wrapper');
var prettify = require('gulp-prettify');
var ENV      = require('../tools/env');

var SRC  = path.join(ENV.doc['src-dir'], '**', '*.md');
var DEST = ENV.doc['dest-dir'];


// MARKED CONFIGURATION
// ----------------------------------------------------------------------------
var MD_CONF = {
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
};


// PRETTIFY CONFIGURATION
// ----------------------------------------------------------------------------
var PRT_CONF;

try {
  // gulp-prettify est trop con pour gérer lui même les fichiers .jsbeautifyrc
  PRT_CONF = JSON.parse(fs.readFileSync('./.jsbeautifyrc'));
} catch (e) {
  gutil.log(gutil.colors.yellow('WARN:'), '[.jsbeautifyrc]', e.message);

  PRT_CONF = {
    brace_style          : 'collapse',
    end_with_newline     : true,
    indent_size          : 2,
    indent_char          : ' ',
    indent_inner_html    : false,
    indent_scripts       : 'normal',
    max_preserve_newlines: 2,
    preserve_newlines    : true,
    unformatted          : [
      'pre', 'code', 'a', 'sub', 'sup', 'b', 'i', 'u', 'strong', 'em'
    ]
  };
}


// WRAPPER CONFIGURATION
// ----------------------------------------------------------------------------
var WRP_CONF = {
  header: function (file) {
    var tpl   = fs.readFileSync('.gsk/tools/doc/header.tpl', 'utf8');
    var spl   = file.relative.split(path.sep)
    var depth = spl.length;
    var up    = ['.'];

    while(depth--) { up.push('..'); }

    var root = up.join('/');

    return tpl
      .replace(/\$\{filename\}/g, spl[spl.length - 1])
      .replace(/\$\{root\}/g, root);
  },
  footer: function (file) {
    var tpl = fs.readFileSync('.gsk/tools/doc/footer.tpl', 'utf8');

    return tpl;
  }
};


// TASK DEFINITION
// ----------------------------------------------------------------------------

// $ gulp doc:static
// ----------------------------------------------------------------------------
// Génère toute la doc statique du projet
gulp.task('doc:static', function () {
  return gulp.src(SRC)
    .pipe(newer(DEST))
    .pipe(marked(MD_CONF))
    .pipe(wrapper(WRP_CONF))
    .pipe(prettify(PRT_CONF))
    .pipe(gulp.dest(DEST));
});

// $ gulp doc:kss
// ----------------------------------------------------------------------------
// Génère le styleguide du projet via KSS
gulp.task('doc:kss', function (cb) {
  var CONF = require('../../kss.json');

  exec([
    'mkdir -p ', path.resolve(CONF.destination), ' && ',
    './node_modules/.bin/kss-node -c ./kss.json'
  ].join(''), function (err, stdout, stderr) {
    stdout.split('\n').forEach(function (line) {
      gutil.log(line);
    });

    if (stderr) {
      gutil.log(gutil.colors.red('ERROR:'), '[kss]', stderr);
    }

    if (err && !stderr) {
      gutil.log(gutil.colors.red('ERROR:'), '[kss]', err.message);
    }

    cb(null);
  });
});

// $ gulp doc
// ----------------------------------------------------------------------------
// Génère toute la doc du projet
gulp.task('doc', function (cb) {
  // Si on optimize le projet, on n'inclus pas la documentation.
  if (ENV.all.optimize) { cb(null); }

  runner('doc:static', 'doc:kss', cb);
});
