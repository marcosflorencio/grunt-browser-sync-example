module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    browserSync: {
      bsFiles: {
        src: [
         '**/*.html',
         '**/*.css',
         '**/*.js' 
        ]
      },
      options: {
        server: {
          baseDir: './'
        }
      }
    }
  });

  grunt.registerTask('browser-sync', ['browserSync']);
};