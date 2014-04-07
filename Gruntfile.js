'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    clean: ['styles/**/*.gen.*', 'gen'],
    csstree: {
      lessTree: {
        options: {
          ext: '.less'
        },
        src: 'styles'
      }
    },
    less: {
      compileTree: {
        expand: true,
        src: ['styles/**/branch.gen.less'],
        ext: '.min.css',
        extDot: 'last'
      }
    }
  });

  grunt.loadNpmTasks('grunt-csstree');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['clean','csstree', 'less']);

};