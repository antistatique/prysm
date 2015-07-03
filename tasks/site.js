module.exports = function(gulp, $, config) {
/*
 * Site publication folder
 */
 gulp.task('site-build', function() {
   return gulp.src([
      config.build + '/**/*',
    ])
     .pipe(gulp.dest(config.app.ghpages + '/build'));
 });

 gulp.task('site-files', function() {
   return gulp.src([
      'assets/.htaccess',
      'styleguide/templates/*',
      'assets/favicon/*'
    ])
     .pipe(gulp.dest(config.app.ghpages));
 });

 gulp.task('site', ['site-build', 'site-files']);

};


