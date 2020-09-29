var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('serve', function() {
    browserSync({
      port: 5000,
      notify: false,
      logPrefix: 'PSK',
      logLevel: 'debug',
      snippetOptions: {
        rule: {
          match: '<span id="browser-sync-binding"></span>',
          fn: function(snippet) {
            return snippet;
          }
        }
      },
      server: {
        baseDir: ['site']
      }
    });
});