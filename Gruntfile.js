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
        dest: 'gen/'
      }
    },
    csstree: {
      lessTree: {
        src: 'gen'
      }
    },
    watch: {
      options: { nospawn: true },
      less: {
        files: ['styles/**/*'],
        tasks: ['less']
      }
    }
  });

  grunt.event.on('watch', function(action, filepath, target) {
    grunt.config('less.compileTree.src', [filepath.replace('styles/', '')] );
  });

  grunt.loadNpmTasks('grunt-csstree');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['copy', 'less', 'csstree']);
  grunt.registerTask('default', ['clean','build']);

};