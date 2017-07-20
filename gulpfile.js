
var gulp = require('gulp'),
	sass = require('gulp-sass'),
    order = require("gulp-order"),
    uglify = require("gulp-uglify"),
	browserSync = require('browser-sync').create(),
	concat = require('gulp-concat');

	var styleSheetSources = ['./src/assets/css/*.scss', 
	'./node_modules/bootstrap/dist/css/bootstrap.min.css',
	'./node_modules/font-awesome/css/font-awesome.min.css'];

	var jsSources = ['./src/assets/js/*.js', 
	'./node_modules/bootstrap/dist/bootstrap.min.js', 
	'./node_modules/jquery/dist/jquery.min.js'];

	var HTMLSources = ['./src/*.html'];

gulp.task('js', function() {
    return gulp.src(jsSources)
        .pipe(uglify())
        .pipe(order([
            'node_modules/*',
            'src/assets/*'
        ]))
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('sass', function() {
  return gulp.src(styleSheetSources)
    .pipe(sass().on('error', sass.logError))
      .pipe(order([
          'node_modules/*',
          'src/assets/*'
      ]))
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('html', function() {
	return gulp.src(HTMLSources)
	.pipe(gulp.dest('./dist/'));
});

gulp.task('fonts', function() {
	return gulp.src('./node_modules/font-awesome/fonts/*')
	.pipe(gulp.dest('./dist/fonts/'));
});

gulp.task('watch', function(){

    gulp.watch(jsSources, ['js', browserSync.reload]);
    gulp.watch(styleSheetSources, ['sass', browserSync.reload]);
    gulp.watch(HTMLSources, ['html', browserSync.reload]);

});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});

gulp.task('default', ['js', 'html', 'sass', 'fonts', 'browser-sync', 'watch']);