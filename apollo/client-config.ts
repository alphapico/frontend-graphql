// import { onError } from "apollo-link-error";
// import { HttpLink } from "apollo-link-http";
// import { ApolloLink } from "apollo-link";
// import { InMemoryCache } from "apollo-cache-inmemory";
// import { RefreshTokensDocument } from "../src/gql/graphql";
// import { ApolloClient, Observable } from "@apollo/client/core";

// export default function (getClient: () => ApolloClient<any>) {
//   const httpLink = new HttpLink({
//     uri: "http://localhost:3333/graphql",
//     credentials: "include",
//   });

//   const errorLink = onError(
//     ({ graphQLErrors, networkError, operation, forward }) => {
//       if (graphQLErrors) {
//         for (let err of graphQLErrors) {
//           if (err.extensions?.code === "UNAUTHENTICATED") {
//             // Token is expired or invalid
//             return new Observable((observer) => {
//               const apolloClient = getClient();
//               apolloClient
//                 .mutate({ mutation: RefreshTokensDocument })
//                 .then(() => {
//                   // Retry the failed request
//                   forward(operation).subscribe(observer);
//                 })
//                 .catch((error) => {
//                   observer.error(error);
//                 });
//             });
//           }
//         }
//       }

//       if (networkError) {
//         console.log(`[Network error]: ${networkError}`);
//         // Handle network errors here
//       }
//     }
//   );

//   // Use the errorLink and httpLink in the Apollo Client
//   const link = ApolloLink.from([errorLink, httpLink]);

//   return {
//     link,
//     cache: new InMemoryCache(),
//     httpEndpoint: "http://localhost:3333/graphql",
//     httpLinkOptions: {
//       credentials: "same-origin",
//     },
//   };
// }
