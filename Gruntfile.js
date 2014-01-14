'use strict';

module.exports = function(grunt) {
	var base = __dirname+'/scss';

	grunt.initConfig({
		sass: {
			options: {
				style: 'expanded'
			},
			dev: {
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
