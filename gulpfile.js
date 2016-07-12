var gulp = require("gulp"),
    mocha = require("gulp-mocha");
    grepc = require("gulp-grep-contents"),
    gprint = require("gulp-print"),
    change = require("gulp-change");

gulp.task('find-only', function(){
    return gulp.src('specs/**/*.js')
        .pipe(grepc( /\.only/))
        .pipe(gprint());
});

gulp.task('rm-only', function(){

    function removeOnly(content){
        return content.replace(/\.only/, '');
    }

    gulp.src('specs/**/*.js')
        .pipe(grepc( /\.only/))
        .pipe(gprint())
        .pipe(change(removeOnly))
        .pipe(gulp.dest('specs/'));
});