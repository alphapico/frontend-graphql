import { onError } from "@apollo/client/link/error";
import { RefreshTokensDocument } from "../src/gql/graphql";
import { ApolloClient, Observable } from "@apollo/client/core";

const retryCounts = new Map();

export const createErrorLink = (apolloClient: ApolloClient<any>) => {
  return onError(({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        if (err.extensions?.code === "UNAUTHENTICATED") {
          // console.log(JSON.stringify(operation));
          // Generate a unique key for the operation
          const operationKey = JSON.stringify({
            operationName: operation.operationName,
            variables: operation.variables,
          });

          let retryCount = retryCounts.get(operationKey) || 0;

          // Check if retry count exceeds 2
          if (retryCount >= 2) {
            console.log("Retry limit reached. Not retrying.");
            retryCounts.delete(operationKey);
            return;
          }

          // Increment retry count
          retryCounts.set(operationKey, retryCount + 1);

          return new Observable((observer) => {
            const delay = Math.pow(2, retryCount) * 200; // Exponential backoff (2^retryCount seconds)

            setTimeout(() => {
              apolloClient
                .mutate({ mutation: RefreshTokensDocument })
                .then(() => {
                  console.log(
                    "Token refreshed, retrying operation after delay:",
                    delay
                  );
                  // Retry the failed request
                  forward(operation).subscribe(observer);
                })
                .catch((error) => {
                  console.error("Error refreshing tokens:", error);
                  observer.error(error);
                  retryCounts.delete(operationKey);
                });
            }, delay);
          });
        }
      }
    }

    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
      // Handle network errors here
    }
  });
};

// import { onError } from "@apollo/client/link/error";
// import { RefreshTokensDocument } from "../src/gql/graphql";
// import { ApolloClient } from "@apollo/client/core";

// export const createErrorLink = (apolloClient: ApolloClient<any>) => {
//   return onError(({ graphQLErrors, networkError, operation, forward }) => {
//     if (graphQLErrors) {
//       for (let err of graphQLErrors) {
//         if (err.extensions?.code === "UNAUTHENTICATED") {
//           // Token is expired or invalid
//           let shouldRetry = false;

//           apolloClient
//             .mutate({ mutation: RefreshTokensDocument })
//             .then(() => {
//               shouldRetry = true;
//               console.log("Refresh token successful");
//             })
//             .catch((error) => {
//               console.error("Error refreshing tokens:", error);
//               shouldRetry = false;
//             });

//           // if (shouldRetry) {
//           //   console.log({ shouldRetry });
//           //   return forward(operation);
//           // }

//           return forward(operation);
//         }
//       }
//     }

//     if (networkError) {
//       console.log(`[Network error]: ${networkError}`);
//     }
//   });
// };

// import { onError } from "@apollo/client/link/error";
// import { RefreshTokensDocument } from "../src/gql/graphql";
// import { ApolloClient } from "@apollo/client/core";

// export const createErrorLink = (apolloClient: ApolloClient<any>) => {
//   return onError(({ graphQLErrors, networkError, operation, forward }) => {
//     if (graphQLErrors) {
//       for (let err of graphQLErrors) {
//         if (err.extensions?.code === "UNAUTHENTICATED") {
//           // Check if this operation has already been retried
//           const context = operation.getContext();
//           if (context.hasBeenRetried) {
//             console.error("Operation already retried, not retrying again.");
//             return;
//           }

//           // Token is expired or invalid
//           apolloClient
//             .mutate({ mutation: RefreshTokensDocument })
//             .then(() => {
//               console.log("Token refreshed");

//               // Mark the operation as retried
//               operation.setContext({
//                 ...context,
//                 hasBeenRetried: true,
//               });

//               // // Retry the failed request
//               // console.log("Retry operation");
//               // forward(operation);
//             })
//             .catch((error) => {
//               console.error("Error refreshing tokens:", error);
//             });

//           // Delay retrying the failed request by 1 second
//           setTimeout(() => {
//             console.log("Retry operation after 1 second");
//             return forward(operation);
//           }, 1000);

//           // Break the loop to avoid processing other errors
//           break;
//         }
//       }
//     }

//     if (networkError) {
//       console.log(`[Network error]: ${networkError}`);
//     }
//   });
// };
