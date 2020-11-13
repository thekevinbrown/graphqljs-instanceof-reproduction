const path = require('path');

module.exports = {
	entry: path.resolve('src', 'index.js'),
	mode: 'development',
	target: 'node',
	output: {
		filename: 'index.js',
		libraryTarget: 'commonjs2',
		path: path.resolve('lib'),
	},
};
