// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/public/src/assets/vendor/jquery-jeditable/Gruntfile.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 12:32

/**
 * Gruntfile.js
 *
 * Run 'grunt' in shell to minify javascript
 *
 */
module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package-grunt.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= pkg.homepage %> */\n',
        mangle: false
      },
      dist: {
        files: {
          'dist/jquery.jeditable.min.js': 'src/jquery.jeditable.js',
          'dist/jquery.jeditable.autogrow.min.js': 'src/jquery.jeditable.autogrow.js',
          'dist/jquery.jeditable.charcounter.min.js': 'src/jquery.jeditable.charcounter.js',
          'dist/jquery.jeditable.datepicker.min.js': 'src/jquery.jeditable.datepicker.js',
          'dist/jquery.jeditable.masked.min.js': 'src/jquery.jeditable.masked.js',
          'dist/jquery.jeditable.time.min.js': 'src/jquery.jeditable.time.js'
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-uglify-es')
  grunt.registerTask('default', 'uglify')

}
