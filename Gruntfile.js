// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		// Metadata.
		pkg: grunt.file.readJSON('package.json'),
		// Task configuration.
		concat: {
			dist1: {
                src: [
                    'css/bootstrap.min.css',
                    'css/agency.min.css',
                    'css/font-awesome.min.css',
                    'css/animate.min.css'
                ],
                dest: '100thingslearned-all.css'
            },
            dist2: {
                src: [
                    'js/wow.min.js',
                    'js/angular.min.js',
                    'app/core.js'
                ],
                dest: '100thingslearned-core.js'
            },
            dist3: {
                src: [
                    'js/jquery-2.1.3.min.js',
                    'js/bootstrap.min.js',
                    'js/jquery.easing.min.js',
                    'js/classie.js',
                    'js/cbpAnimateHeader.js',
                    'js/jqBoostrapValidation.js',
                    'js/agency.js',
                    'js/typed.min.js'
                ],
                dest: '100thingslearned-all.js'
            }
		},
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				unused: true,
				boss: true,
				eqnull: true,
				globals: {
					jQuery: true
				},
				node: true
			},
			gruntfile: {
				src: 'Gruntfile.js'
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task.
	grunt.registerTask('default', ['jshint', 'concat']);
};
