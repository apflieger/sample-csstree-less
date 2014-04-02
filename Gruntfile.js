'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    clean: ['css/**/branch.*', 'gen'],
    csstree: {
      mainTree: {
        options: {
          extension: '.less'
        },
        src: 'css'
      }
    },
    less: {
      dev: {
        files: {
          'gen/index.css': 'css/index/branch.less'
        }
      }
    }
  });

  grunt.loadNpmTasks('csstree');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['clean','csstree', 'less']);

};