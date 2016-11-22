var gulp =require('gulp');
var css =require('gulp-clean-css');
var html =require('gulp-html-minifier2');
var js =require('gulp-uglify');

gulp.task('css', function() {
	return gulp.src('css/*.css').pipe(css()).pipe(gulp.dest('dist/css'))
});

gulp.task('html', function() {
	return gulp.src('*.html').pipe(html({collapseWhitespace: true})).pipe(gulp.dest('dist'))
});

gulp.task('js', function() {
	return gulp.src('js/*.js').pipe(js()).pipe(gulp.dest('dist/js'))
});

gulp.task('css1', function() {
	return gulp.src('views/css/*.css').pipe(css()).pipe(gulp.dest('dist/views/css'))
});

gulp.task('html1', function() {
	return gulp.src('views/*.html').pipe(html({collapseWhitespace: true})).pipe(gulp.dest('dist/views'))
});

gulp.task('js1', function() {
	return gulp.src('views/js/*.js').pipe(js()).pipe(gulp.dest('dist/views/js'))
});