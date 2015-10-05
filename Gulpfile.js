var async = require('async');
var gulp = require('gulp');
var util = require('gulp-util');
var task = process.argv[2];
var minifyCSS = require('gulp-minify-css');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var csslint = require('gulp-csslint');
var data = require('gulp-data');
var argv = require('yargs')
  .default('baseUri', '/')
  .argv;

var customStyleDelimiter = '/* Include Canon */';
var customStyleStartingLine = 0;
var customStyleStartingLineReporter = function(file) {
  file.csslint.results.forEach(function(result) {
    var message, c = util.colors;
    if (result.error.line >= customStyleStartingLine) {
      message  = result.error;
      util.log(
        c.red('[') +
        (
          typeof message.line !== 'undefined' ?
          c.yellow( 'L' + message.line ) +
          c.red(':') +
          c.yellow( 'C' + message.col )
            :
            c.yellow('GENERAL')
        ) +
        c.red('] ') +
        message.message + ' ' + message.rule.desc + ' (' + message.rule.id + ')');
    }
  });
};

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
  var collections = require('metalsmith-collections');
  var markdown = require('metalsmith-markdown');
  var metallic = require('metalsmith-metallic');
  var templates = require('metalsmith-in-place');
  var layouts = require('metalsmith-layouts');

  async.series({
    metalsmith: function (done) {
      metalsmith(join(__dirname, 'docs'))
        .metadata({ baseUri: argv.baseUri })
        .use(templates({
          engine: 'handlebars',
          pattern: 'components/**/*.md'
        }))
        .use(metallic())
        .use(markdown())
        .use(collections({
          'app-layout': {
            sortBy: 'index'
          },
          'ui-components': {
            sortBy: 'index'
          },
          'ux-patterns': {
            sortBy: 'index'
          }
        }))
        .use(templates({
          engine: 'handlebars'
        }))
        .use(layouts({
          engine: 'handlebars',
          directory: 'templates',
          partials: {
              'header': '../src/documentation/partials/header',
              'primary-nav': '../src/documentation/partials/primary-nav'
          }
        }))
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

gulp.task('csslint', ['build'], function(){
  gulp.src('build/css/canon-bootstrap.css')
    .pipe(data(function(file) {
      var content = String(file.contents);
      var lines = content.split("\n");
      for(var i = 0; i < lines.length; i++) {
        if (lines[i].indexOf(customStyleDelimiter) > -1) {
          customStyleStartingLine = i + 1;
          break;
        }
      }
      return content;
    }))
    .pipe(csslint())
    .pipe(csslint.reporter(customStyleStartingLineReporter));
});