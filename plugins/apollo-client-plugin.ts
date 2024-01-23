// plugins/apollo-client-plugin.ts
// import { defineNuxtPlugin } from "#app";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { createErrorLink } from "../apollo/apollo-error-link";

export default defineNuxtPlugin((nuxtApp) => {
  const httpLink = new HttpLink({
    uri: "http://localhost:3333/graphql", // Replace with your GraphQL endpoint
    credentials: "include", // Needed for http-only cookies
  });

  const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  const errorLink = createErrorLink(apolloClient);
  apolloClient.setLink(errorLink.concat(httpLink));

  nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient);
});
