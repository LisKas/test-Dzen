var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync');
var imagemin    = require('gulp-imagemin');
var concat      = require('gulp-concat');
var cssnano     = require('gulp-cssnano');
var uglify      = require('gulp-uglifyjs');
var autoprefixer= require('gulp-autoprefixer');



gulp.task('sass', function() {
	return gulp.src('src/sass/**/*.scss')
	.pipe(sass({outputStyle: 'expanded'}).on ('error', sass.logError))
	.pipe(autoprefixer(['last 15 versions', '>1%', 'ie 8'],{cascade: true}))
	.pipe(gulp.dest('src/css'))
	.pipe(browserSync.reload({
		stream: true
	}))
});  

gulp.task('concatCss' ,['sass'], function(){
	return gulp.src([
		'src/css/normalize.css',
		'src/css/slick-theme.css',
		'src/css/slick.css'])
	.pipe(concat('libs.css'))
	.pipe(cssnano())
	.pipe(gulp.dest('src/css'));

});

gulp.task('concatJs' , function(){
	return gulp.src([
		'src/js/jquery.min.js',
		'src/js/slick.min.js'])
	.pipe(concat('libs.js'))
	.pipe(uglify())
	.pipe(gulp.dest('src/js'));

});

gulp.task('browser-sync', function() {
	browserSync({
      server: {
      	baseDir:'src'
      	}
	});
}); 

gulp.task('watch', ['browser-sync' , 'concatCss', 'concatJs'], function() {
	gulp.watch('src/sass/**/*.scss' , ['sass']);
	gulp.watch('src/*.html' , browserSync.reload);
	gulp.watch('src/js/**/*.js' , browserSync.reload);
});  

gulp.task('img', function(){
	return gulp.src('src/img/**/*')
	.pipe(imagemin([
    imagemin.jpegtran({progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.svgo({plugins: [{removeViewBox: true}]})
    ]))
   
    .pipe(gulp.dest('dist/img'));
});

gulp.task('default', ['watch']);
// ///////////////////////////////////////////////////
gulp.task('build', ['img', 'sass'] , function(){
	var buildCss = gulp.src(['src/css/main.css',
		'src/css/libs.css'])
	.pipe(gulp.dest('dist/css'));

	var buidJs = gulp.src(['src/js/main.js',
		'src/js/libs.js'])
	.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('src/*.html')
	.pipe(gulp.dest('dist'));
});