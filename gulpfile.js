var gulp          = require("gulp");
var watch         = require("gulp-watch");
var browserSync   = require('browser-sync').create();
var reload        = browserSync.reload;

var documentRoot  = "document_root/"
var source        = "document_root/**/*"

gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: documentRoot
      }
  });
});

gulp.task("watch", function () {
    watch([source], reload);
});

gulp.task("default", ["browser-sync", "watch"]);