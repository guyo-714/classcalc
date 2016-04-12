var gulp = require("gulp"),
    sourcemaps = require("gulp-sourcemaps"),
    babel = require("gulp-babel"),
    gutil = require("gulp-util"),
    path = require("path"),
    del = require("del"),
    mocha = require("gulp-mocha");
    grepc = require("gulp-grep-contents"),
    gprint = require("gulp-print"),
    change = require("gulp-change"),
    Paths = require("./config.paths");

gulp.task('clean', function(){
    return del([Paths.build]);
});

gulp.task('babel',['clean'], function(){
    return gulp.src([Paths.src + '**/*.js', Paths.src + '**/*.jsx'])
        .pipe(sourcemaps.init())
        .pipe(babel())
        .on('error', gutil.log)
        .pipe(sourcemaps.write('.', {
            includeContent: false,
            sourceRoot: function(file) {
                return path.relative(file.path, __dirname);
            }
        }))
        .pipe(gulp.dest(Paths.build));
});

gulp.task('find-only', function(){
    console.log(Paths.specPath);
    return gulp.src(Paths.specPath + '/**/*.js')
        .pipe(grepc( /\.only/))
        .pipe(gprint());
});

gulp.task('rm-only', function(){

    function removeOnly(content){
        return content.replace(/\.only/, '');
    }

    gulp.src(Paths.specPath + '/**/*.js')
        .pipe(grepc( /\.only/))
        .pipe(gprint())
        .pipe(change(removeOnly))
        .pipe(gulp.dest(Paths.specPath));
});