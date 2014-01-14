'use strict';

module.exports = function(grunt) {

	grunt.initConfig({
		markdown: {
			all: {
				files: [{
					expand: true,
					src: 'README.md',
					dest: 'dist',
					ext: '.html'
				}],
				options: {
					markdownOptions: {
						gfm: true,
					},
				},
			},
		},
	});

	grunt.loadNpmTasks('grunt-markdown');
	grunt.registerTask('default', 'markdown');
};