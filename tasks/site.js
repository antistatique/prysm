module.exports = function(gulp, $, config) {
/*
 * Site publication folder
 */
 gulp.task('site-build', function() {
   return gulp.src([
      config.build + '/**/*',
    ])
     .pipe(gulp.dest(config.app.basedir + '/build'));
 });

 gulp.task('site-files', function() {
   return gulp.src([
      'assets/.htaccess',
      'styleguide/templates/*'
    ])
     .pipe(gulp.dest(config.app.basedir));
 });

 gulp.task('site', ['site-build', 'site-files']);

};


