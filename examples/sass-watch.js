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
		watch: {
			sass: {
				files: ['./public/sass/main.scss', './public/sass/partials/**.scss', './public/sass/modules/**.scss'],
				tasks: ['sass']
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', 'watch');
};
