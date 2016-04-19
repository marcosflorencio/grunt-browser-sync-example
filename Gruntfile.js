module.exports = function(grunt) {
  grunt.initConfig({
    browserSync: {
      dev:{
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
          // , proxy: '' 
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.registerTask('browser-sync', ['browserSync']);
};