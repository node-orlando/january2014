## Node Orlando January 2014 - Grunt.js

From [Gruntjs.com](http://gruntjs.com)

> ### Why use a task runner?
> In one word: automation. The less work you have to do when performing repetitive tasks like minification, compilation, unit testing, linting, etc, the easier your job becomes. After you've configured it, a task runner can do most of that mundane work for you—and your team—with basically zero effort.

## Using this repo

This repo is a colleciton of the examples shown at the meetup and hopefully you can use it as a reference if need be. The below is the minimum required to use the examples in this repo. For more info checkout [the official getting started guide](http://gruntjs.com/getting-started).

Grunt requires Node.js and npm to be installed, if you have recently installed node, npm comes with that installation. If you want to update to the latest version of node, you can [download the latest version](http://nodejs.org/download/). It's probably best that you are on the most recent release of node unless you have a specific reason not to be. Also you may not be working on a node project, Grunt will still be useful to you.

All of Grunt's dependencies are distributed through npm, so it helps to have a package.json file to keep record of these dependencies, take a look at the package.json file in this repo or run `$ npm init` to create your own package.json in your project. 

If you don't have the grunt CLI installed, go ahead and install it now. Be sure to add the `-g` flag to get it installed globally on your machine.

```
$ npm install -g grunt-cli
```

To start running Grunt, install the necesarry dependendencies, this will install the dependencies listed in your package.json. If you look at the package.json, you'll notice all the grunt dependencies are under the `devDependencies` object, this is because you probably won't need them in your production environment, it's also recommeneded by grunt. To save `devDependencies`,  use the `--save-dev` flag when installing dependencies.

```
$ npm install
```

Now we can test that grunt is install properly, you'll see that grunt returns the versions of the cli and the locally install grunt task runner.

```
$ grunt --version
grunt-cli v0.1.11
grunt v0.4.2
```

Great, now you can start exploring!

To use the example grunt files, you can copy them from the `examples/` directory to `Gruntfile.js` or you can use the `./changegruntfile` script that will list and move the files for you.

```
$ ./changegruntfile --list

Available example grunt files:

markdown.js
uglify.js
... more files

Usage: $ ./changegruntfile --file=uglify.js

$ ./changegruntfile --file=uglify.js

Now using example uglify.js Gruntfile

'use strict';

module.exports = function(grunt) {

 // file contents

};

```

Now that you have a Gruntfile.js in place, go ahead and run `$ grunt`! You can see that something happened. All files that are created with our Grunt files will land in the `dist` directory.

## Rough Outline for the Meetup

- introduction to Grunt (covered above)
	- what is Grunt for?
	- what can you do with Grunt?
- setting up a gruntfile
- using grunt
- (if we're lucky and get to it) making a grunt task