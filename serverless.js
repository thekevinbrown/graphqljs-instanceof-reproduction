module.exports = {
	service: 'just-for-local-development',
	plugins: ['serverless-offline'],
	custom: {
		'serverless-offline': {
			noPrependStageInUrl: true,

			// This was suggested as a fix here: https://github.com/graphql/graphql-js/issues/2801#issuecomment-696768674
			// But it doesn't fix it.
			useChildProcesses: true,
		},
	},

	provider: {
		name: 'aws',
		runtime: 'nodejs12.x',
		timeout: 30,
		stage: 'api',

		// Prepare for the next version of Serverless
		apiGateway: {
			shouldStartNameWithService: true,
		},
	},

	package: {
		individually: true,
		excludeDevDependencies: true,
		exclude: ['**'],
	},

	functions: {
		test: {
			// This works
			// handler: `src/index.handler`,

			// This doesn't.
			handler: `lib/index.handler`,

			events: [
				{
					http: {
						path: '{proxy+}',
						method: 'ANY',
						cors: true,
					},
				},
			],
		},
	},
};
