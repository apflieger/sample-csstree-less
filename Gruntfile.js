'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    clean: ['styles/**/*.gen.*', 'gen'],

    less: {
      compileTree: {
        expand: true, 
        cwd: 'styles', 
        src: ['**/*.less'],
        ext: '.css',
        dest: 'gen/', 
        extDot: 'last',
        options: {
          sourceMap: true
        }
      }
    },
    copy: {
      css: {
        expand: true, 
        cwd: 'styles', 
        src: ['**/*.css'],
        // ext: '.gen.css',
        dest: 'gen/', 
        // extDot: 'last'
      }
    },
    csstree: {
      lessTree: {
        src: 'gen'
      }
    },
  });

  grunt.loadNpmTasks('grunt-csstree');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['clean','copy', 'less', 'csstree']);

};