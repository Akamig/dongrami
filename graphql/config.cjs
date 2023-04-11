/** @type {import('@graphql-codegen/cli').CodegenConfig} */
const config = {
  overwrite: true,
  generates: {
    'graphql/schema.graphql': {
      schema: ['https://9c-main-full-state.planetarium.dev/graphql'],
      plugins: ['schema-ast'],
    },
    'src/graphql/sdk.main.ts': {
      schema: ['https://9c-main-full-state.planetarium.dev/graphql'],
      documents: 'graphql/query/*.graphql',
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-resolvers',
        'typescript-graphql-request',
      ],
    },
  },
};

module.exports = config;
