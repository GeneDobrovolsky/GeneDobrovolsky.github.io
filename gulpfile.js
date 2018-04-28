// Require dependencies
var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    hash         = require("gulp-hash"), 
    watch        = require('gulp-watch'),
    del          = require("del");


// Compile SCSS files to CSS
gulp.task("scss", function () {
    del(["static/css/**/*"])
    gulp.src("src/scss/**/*.scss")
        .pipe(sass({outputStyle : "compressed"}))
        .pipe(autoprefixer({browsers : ["last 20 versions"]}))
        .pipe(hash())
        .pipe(gulp.dest("static/css"))
        .pipe(hash.manifest("hash.json")) //Create a hash map
        .pipe(gulp.dest("data/css")) //Put the map in the data directory
})


// Hash images
gulp.task("images", function () {
    del(["static/images/**/*", "content/post/images/**/*"])
    gulp.src("src/images/**/*.+(png|jpg|jpeg|gif|svg)")
        .pipe(gulp.dest("static/images"))
        .pipe(gulp.dest("content/post/images"))
})


// Watch asset folder for changes
gulp.task("watch", ["scss", "images"], function () {
    gulp.watch("src/scss/**/*", ["scss"])
    gulp.watch("src/images/**/*", ["images"])
})


// Set watch as default task
gulp.task("default", ["watch"])