# GraphQL Frontend Architecture

## Installation and Setup

```bash
npx nuxi@3.10 init example-gql
# pick npm
# Initialize git repository? Yes
cd example-gql

npm i graphql@^16.8.1
npm i -D typescript@^5.3.2 @graphql-codegen/cli@^5.0.0

npx graphql-code-generator init
#? What type of application are you building? Application built with Vue
#? Where is your schema?: http://localhost:3333/graphql
#? Where are your operations and fragments?: src/**/*.graphql
#? Where to write the output: src/gql/
#? Do you want to generate an introspection file? y
#? How to name the config file? codegen.ts
#? What script in package.json should run the codegen? codegen

npm i @vue/apollo-composable
npm i @apollo/client@^3.8
```

## Project Directory

```bash
.
├── README.md
├── apollo
│   ├── apollo-client-plugin.ts
│   └── apollo-error-link.ts
├── app.vue
├── codegen.ts
├── graphql.schema.json
├── nuxt.config.ts
├── package-lock.json
├── package.json
├── public
│   └── favicon.ico
├── server
│   └── tsconfig.json
├── src
│   ├── components
│   │   ├── getCharges.vue
│   │   ├── loginAdminButton.vue
│   │   ├── loginButton.vue
│   │   ├── logoutButton.vue
│   │   ├── protectedData.vue
│   │   ├── reinstateCustomer.vue
│   │   └── suspendCustomer.vue
│   ├── gql
│   │   ├── fragment-masking.ts
│   │   ├── gql.ts
│   │   ├── graphql.ts
│   │   └── index.ts
│   └── graphql
│       ├── auth.graphql
│       ├── charge.graphql
│       └── customer.graphql
└── tsconfig.json
```

- The `~/src/gql` folder and its files are generated using the command `npm run codegen`.
- All GraphQL queries, mutations, fragments, and subscriptions reside in the `~/src/graphql` folder.
- `codegen.ts` is the configuration file for `@graphql-codegen/cli`.
- All Apollo GraphQL setup files are located in the `~/apollo` folder.
  - `apollo-error-link.ts` is where the Error Link is created to intercept network errors. You can handle relevant errors here.
  - For more information, visit: [Apollo GraphQL Error Link Documentation](https://www.apollographql.com/docs/react/api/link/introduction/).

---

### Key Components of the Directory

- `apollo`: Contains Apollo Client setup and configuration files.
  - `apollo-client-plugin.ts`: Sets up the Apollo Client instance for the application.
  - `apollo-error-link.ts`: Configures Apollo's error handling logic, particularly for network errors.
- `src`: Source code of the application.
  - `components`: Vue components for different functionalities like user authentication (`loginButton.vue`, `logoutButton.vue`), user management (`suspendCustomer.vue`, `reinstateCustomer.vue`), and data display (`getCharges.vue`, `protectedData.vue`).
  - `gql`: GraphQL-related code.
    - `fragment-masking.ts`: Utility functions for handling GraphQL fragments.
    - `graphql.ts`: Auto-generated file containing TypeScript types for GraphQL queries, mutations, fragments, and subscriptions reside.
  - `graphql`: Contains GraphQL operation definitions like queries (`auth.graphql`), mutations (`customer.graphql`), and more.
- `tsconfig.json`: TypeScript configuration file for the project.
- `codegen.ts`: Configuration file for GraphQL Code Generator, which automates the creation of TypeScript types based on GraphQL queries and schemas.
- `graphql.schema.json`: The JSON representation of the GraphQL schema, used by various tools and libraries for validation and type generation. Generated from `npm run codegen`

## Generate GraphQL codegen

- Maintain and extend GraphQL operations in the `src/graphql` folder to match backend changes or new requirements.
- Each time you create or modify any file in the `graphql` folder, execute the following command:

```bash
npm run codegen
```
