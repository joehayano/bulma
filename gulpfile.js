var gulp = require("gulp");
var stylus = require("gulp-stylus");
var jade = require("gulp-jade");
var plumber = require("gulp-plumber");
var autoprefixer = require("gulp-autoprefixer");

// sass compile
gulp.task("stylus", function() {
  gulp.src(["source/assets/stylus/**/*.styl", "!source/assets/stylus/**/_*.styl"])
    .pipe(plumber())
    .pipe(stylus())
    .pipe(autoprefixer())
    .pipe(gulp.dest("app/assets/css"));
});

// jade compile
gulp.task("jade", function() {
  gulp.src(["source/jade/**/*.jade", "!source/jade/**/_*.jade"])
.pipe(plumber())
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest("app/"))
});

// file watch
gulp.task("default", function() {
  gulp.watch(["source/assets/stylus/**/*.styl"], ["stylus"]);
  gulp.watch(["source/jade/**/*.jade"], ["jade"]);
});
