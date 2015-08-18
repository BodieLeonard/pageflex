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
    ,del = require('del');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('./src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/'));
});

// Concatenate & Minify Templates
gulp.task('templates', function() {
    return gulp.src('./src/templates/*.html')
        .pipe(concat('templates.html'))
        //.pipe(gulp.dest('./dist/'))
        //.pipe(rename('all.html'))
        .pipe(minifyHTML())
        .pipe(gulp.dest('./dist/'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('./src/js/*.js')
        .pipe(concat('all.js'))
        //.pipe(gulp.dest('./dist/'))
        //.pipe(rename('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});

// Concatenate & Minify JS
gulp.task('libs', function() {
    return gulp.src('./src/libs/*.js')
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('./dist/'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('./src/js/*.js', ['lint', 'scripts']);
    gulp.watch('./src/scss/*.scss', ['sass']);
    gulp.watch('./src/templates/*.html', ['templates']);
});

// clean
gulp.task('clean', function (cb) {
  del([
    '../public/Inserts/SiteHeader.html',
  ], cb);
});

// Inject file content into SiteHeader.html
gulp.task('inject', /*['clean'],*/ function() {

    return gulp.src('./src/SiteHeader.html')
    .pipe(inject(gulp.src(['./dist/*.html']), {
      starttag: '<!-- inject:head:html -->',
      transform: function (filePath, file) {
        return file.contents.toString('utf8')
      }
    }))
    .pipe(inject(gulp.src(['./dist/*.js']), {
      starttag: '<!-- inject:head:js -->',
      transform: function (filePath, file) {
        return '<script>'+file.contents.toString('utf8')+'</script>'
      }
    }))
    .pipe(inject(gulp.src(['./dist/*.css']), {
      starttag: '<!-- inject:head:css -->',
      transform: function (filePath, file) {
        return '<style>'+file.contents.toString('utf8')+'</style>'
      }
    }))
    .pipe(gulp.dest('../public/Inserts/'));
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch', 'templates', 'inject']);