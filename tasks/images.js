'use strict';

module.exports = function(gulp, $, config) {

 /**
  * Copy images
  */
  gulp.task('img-optim', function() {
    return gulp.src(config.images)
      .pipe($.size({title: 'IMAGES'}))
      .pipe(gulp.dest(config.build + 'img'));
  });

  /**
   * Copy svg
   */
   gulp.task('svg-optim', function() {
     return gulp.src(config.svg)
       .pipe($.svgo())
       .pipe($.size({title: 'SVG'}))
       .pipe(gulp.dest(config.build + 'svg'));
   });

   gulp.task('img', ['img-optim', 'svg-optim']);

};
