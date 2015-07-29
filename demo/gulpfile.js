/**
 * Created by vajoylan on 2015/7/27.
 */
var gulp = require('gulp');
var embed = require('gulp-embed');

gulp.task('embed', function () {
    gulp.src('./src/*.html')
        .pipe(embed())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('default',function(){
    gulp.run('embed');
});