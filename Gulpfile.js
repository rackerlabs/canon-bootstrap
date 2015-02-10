var async = require('async');
var gulp = require('gulp');
var util = require('gulp-util');
var task = process.argv[2];
var minifyCSS = require('gulp-minify-css');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var argv = require('yargs')
  .default('baseUri', '/')
  .argv;

function error(e) {
  util.log(e.toString());
  this.emit('end');

  if (task !== 'server') {
    process.exit(1);
  }
}

gulp.task('default', ['build', 'documentation']);

gulp.task('clean', function (done) {
  var del = require('del');

  del(['build', 'docs/build'], done);
});

gulp.task('build', ['build:less', 'build:less-min', 'build:fonts']);

gulp.task('build:less-min', function(){
  return gulp.src('less/canon-bootstrap.less')
    .pipe(concat('canon-bootstrap.min.less'))
    .pipe(sourcemaps.init())
    .pipe(less({ paths: [
      'node_modules/bootstrap/less',
      'node_modules/font-awesome/less'
      ] }))
      .on('error', error)
    .pipe(minifyCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/css'));
});

gulp.task('build:less', function () {

  return gulp.src('less/canon-bootstrap.less')
    .pipe(sourcemaps.init())
    .pipe(less({ paths: [
      'node_modules/bootstrap/less',
      'node_modules/font-awesome/less'
      ] }))
      .on('error', error)
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/css'));
});

gulp.task('build:fonts', function (done) {
  async.series({
    canon: function (done) {
      gulp.src('fonts/**/*')
        .pipe(gulp.dest('build/fonts'))
        .on('end', done);
    },
    bootstrap: function (done) {
      gulp.src('node_modules/bootstrap/fonts/**/*')
        .pipe(gulp.dest('build/fonts'))
        .on('end', done);
    },
    fontawesome:function(done){
      gulp.src('node_modules/font-awesome/fonts/**/*')
      .pipe(gulp.dest('build/fonts'))
      .on('end',done);
    }

  }, done);
});

gulp.task('documentation', ['build'], function (done) {
  var join = require('path').join;
  var metalsmith = require('metalsmith');
  var markdown = require('metalsmith-markdown');
  var templates = require('metalsmith-templates');

  async.series({
    metalsmith: function (done) {
      metalsmith(join(__dirname, 'docs'))
        .metadata({ baseUri: argv.baseUri })
        .use(markdown())
        .use(templates('handlebars'))
        .build(done);
    },
    canon: function (done) {
      gulp.src('build/**/*')
        .pipe(gulp.dest('docs/build'))
        .on('end', done);
    },
    assets: function(done) {
      gulp.src('docs/assets/**/*')
        .pipe(gulp.dest('docs/build/assets'))
        .on('end', done);
    }
  }, done);
});

gulp.task('server', ['documentation'], function () {
  var webserver = require('gulp-webserver');

  gulp.watch(['less/**/*.less', 'docs/!(build)/**/*.*'], ['build', 'documentation']);

  return gulp.src('docs/build')
    .pipe(webserver({ livereload: true }));
});
