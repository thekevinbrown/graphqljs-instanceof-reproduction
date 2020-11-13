# graphqljs-instanceof-reproduction

To reproduce:

1. `yarn`
2. `yarn start`
3. Use a browser to access http://localhost:3000

### Expected result

Functioning Apollo Server

### Actual result

```
Error: Cannot use GraphQLSchema "[object GraphQLSchema]" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.
    at instanceOf (webpack://graphqljs-instanceof-reproduction/./node_modules/graphql/jsutils/instanceOf.js?:27:13)
    at isSchema (webpack://graphqljs-instanceof-reproduction/./node_modules/graphql/type/schema.js?:42:34)
    at assertSchema (webpack://graphqljs-instanceof-reproduction/./node_modules/graphql/type/schema.js?:46:8)
    at validateSchema (webpack://graphqljs-instanceof-reproduction/./node_modules/graphql/type/validate.js?:42:28)
    at assertValidSchema (webpack://graphqljs-instanceof-reproduction/./node_modules/graphql/type/validate.js?:66:16)
    at assertValidExecutionArguments (webpack://graphqljs-instanceof-reproduction/./node_modules/graphql/execution/execute.js?:152:35)
    at executeImpl (webpack://graphqljs-instanceof-reproduction/./node_modules/graphql/execution/execute.js?:100:3)
    at Object.execute (webpack://graphqljs-instanceof-reproduction/./node_modules/graphql/execution/execute.js?:62:63)
    at Object.generateSchemaHash (webpack://graphqljs-instanceof-reproduction/./node_modules/apollo-server-core/dist/utils/schemaHash.js?:15:32)
    at ApolloServer.generateSchemaDerivedData (webpack://graphqljs-instanceof-reproduction/./node_modules/apollo-server-core/dist/ApolloServer.js?:269:41)
```

### Other Notes

Without Webpack, it works fine, e.g. if you swap from

```
handler: `lib/index.handler`,
```

to

```
handler: `src/index.handler`,
```

it works. We need to use Webpack to bundle our Lambda though, so would really like to get it working via Webpack.
