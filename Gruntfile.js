'use strict';

var marked = require('marked'),
	fs = require('fs');

module.exports = function(grunt) {

	grunt.registerTask('markdown', 'Create markdown files', markdown);
	grunt.registerTask('default', 'markdown');

};

/**
 *	The function that grunt is going to run
 */
function markdown () {

	var done = this.async(),
		file = fs.readFileSync(__dirname+'/README.md', 'utf-8')+css;

	var options = {
		gfm: true,
		tables: true,
		breaks: false,
	};

	marked(file, options, function(err, data){
		if (err) done(false);

		fs.writeFileSync(__dirname+'/dist/readme.html', data, 'utf-8');
		done();
	});
};

var css = '<link href="https://gist.github.com/andyferra/2554919/raw/2e66cabdafe1c9a7f354aa2ebf5bc38265e638e5/github.css" media="screen" rel="stylesheet">';