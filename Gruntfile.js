'use strict';

module.exports = function(grunt) {
	var base = __dirname+'/scss';

	grunt.initConfig({
		sass: {
			options: {
				
			},
			// dev is our `task target`
			dev: {
				options: {
					style: 'expanded'
				},
				files: {
					'dist/styles.dev.css': base+'/main.scss'
				},
			},
			prod: {
				options: {
					style: 'compressed'
				},
				files: {
					'dist/styles.prod.css': base+'/main.scss'
				},
			},
		},	
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', 'sass:dev');
};
