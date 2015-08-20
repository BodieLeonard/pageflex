// Include gulp
var gulp = require('gulp')
  ,jshint = require('gulp-jshint')
  ,sass = require('gulp-sass')
  ,concat = require('gulp-concat')
  ,uglify = require('gulp-uglify')
  ,rename = require('gulp-rename')
  ,minifyHTML = require('gulp-minify-html')
  ,minifyCSS = require('gulp-minify-css')
  ,inject = require('gulp-inject')
  ,del = require('del')
  ,transform = require('vinyl-transform')
  ,shell = require('gulp-shell')
  ,gutil = require( 'gulp-util' )
  ,ftp = require( 'vinyl-ftp' );

gulp.task( 'deploy', ['clean'], function () {

    var conn = ftp.create( {
        host:     '69.147.186.59',
        user:     'credera',
        password: 'Welcome1!',
        parallel: 10,
        log:      gutil.log
    } );
    return gulp.src( '../Inserts/SiteHeader.html', { base: '.', buffer: false } )
        .pipe( conn.newer( '' ) ) // only upload newer files
        .pipe( conn.dest( '' ) );

} );

gulp.task('lint', ['sass', 'inject'], function() {
  return gulp.src('./src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
gulp.task('sass', function() {
  return gulp.src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./temp/'));
});
gulp.task('templates', function() {
  return gulp.src('./src/templates/*.html')
    .pipe(concat('templates.html'))
    .pipe(minifyHTML())
    .pipe(gulp.dest('./temp/'));
});

gulp.task('browserify', ['templates'], shell.task([
  'browserify ./src/js/*.js > ./temp/bundle.js'
]))

gulp.task('scripts', ['browserify'], function() {
  return gulp.src('./temp/bundle.js')
    .pipe(concat('app.min.js'))
    //.pipe(uglify())
    .pipe(gulp.dest('./temp/'));
});

gulp.task('watch', function() {
  gulp.watch('./src/js/*.js', ['lint', 'scripts']);
  gulp.watch('./src/scss/*.scss', ['sass']);
  gulp.watch('./src/templates/*.html', ['templates']);
});

gulp.task('clean', ['lint'], function (cb) {
  del(['./temp/'], cb);
});

// Inject file content into SiteHeader.html
gulp.task('inject', ['scripts'], function() {
  return gulp.src('./src/SiteHeader.html')
  .pipe(inject(gulp.src(['./temp/*.html']), {
    starttag: '<!-- inject:head:html -->',
    transform: function (filePath, file) {
      return file.contents.toString('utf8')
    }
  }))
  .pipe(inject(gulp.src(['./temp/app.min.js']), {
    starttag: '<!-- inject:head:js -->',
    transform: function (filePath, file) {
      return '<script>'+file.contents.toString('utf8')+'</script>'
    }
  }))
  .pipe(inject(gulp.src(['./temp/*.css']), {
    starttag: '<!-- inject:head:css -->',
    transform: function (filePath, file) {
      return '<style>'+file.contents.toString('utf8')+'</style>'
    }
  }))
  .pipe(gulp.dest('../Inserts/'));
});

gulp.task('default', ['deploy']);