const path = require('path');

module.exports = {
	entry: path.resolve('src', 'index.js'),
	mode: 'development',
	target: 'node',
	resolve: {
		alias: {
			graphql$: path.resolve(__dirname, './node_modules/graphql/index.js'),
		},
	},
	output: {
		filename: 'index.js',
		libraryTarget: 'commonjs2',
		path: path.resolve('lib'),
	},
};
