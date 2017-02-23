var gulp = require('gulp'),
	flatten = require('gulp-flatten'),
	concat = require('gulp-concat'),
	browserify = require('browserify'),
	vinylBuffer = require('vinyl-buffer'),
	vinylSourceStream = require('vinyl-source-stream'),
	del = require('del'),
	runSequence = require('run-sequence'),
	gutil = require('gulp-util'),
	mocha = require('gulp-mocha');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// Static server
gulp.task( 'dev-server', function() {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });
    gulp.watch( "./src/**/*.js", [ 'bundle:js' ] ).on( 'change', browserSync.reload );
    gulp.watch( "./src/**/*.scss", [ 'bundle:sass' ] ).on( 'change', browserSync.reload );
    gulp.watch( "./src/**/*.html", [ 'html:templates' ] ).on( 'change', browserSync.reload );;
});


// Build tasks
gulp.task( 'build', function() {
	runSequence( 'clean', [ 'bundle:sass', 'bundle:js', 'copy-html' ] );
});

gulp.task('clean', function(done) {
	return del('dist/**')
});

gulp.task( 'bundle:js', function( done ){
    return browserify('src/index.js', {
		cache: {},
		packageCache: {}
	}).bundle()
		.on( 'end', function(){
			gutil.log( 'Browserify: Bundling completed.' );
			done();
		})
		.on( 'error', function( err ) {
			gutil.log( 'Browserify: Error encountered:\n', err );
			done();
		})
		.pipe( vinylSourceStream( 'bundle.js' ) )
		.pipe( vinylBuffer() )
		.pipe( gulp.dest( 'dist' ) );
});

gulp.task( 'bundle:sass', function(){
    var stream = gulp.src( [ './src/**/*.scss', './node_modules/angular-material/modules/scss/*.scss',  ] )
        .pipe( sass().on( 'error', sass.logError ) )
        .pipe( concat( 'bundle.css' ) )
        .pipe( gulp.dest( 'dist' ) );
    return stream;
});

gulp.task( 'html:templates', function(){
    var stream = gulp.src( [ 'src/**/*.html', '!src/**/index.html' ] )
        .pipe( flatten() )
        .pipe( gulp.dest( 'dist/templates' ) );
    return stream;
});

gulp.task( 'html:index', function(){
    return gulp.src( 'src/**/index.html' ).pipe( gulp.dest( 'dist' ) );
});


// Testing tasks
gulp.task('test', function () {
	gulp.src('test/index.js')
		.pipe(mocha());
});