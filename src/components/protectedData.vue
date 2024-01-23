<template>
  <button @click="fetchProtectedMethod">Fetch Protected Data</button>
  <div v-if="loading">Loading...</div>
  <div v-if="error">Error: {{ error.message }}</div>
  <div v-if="data">
    <p>Sub: {{ data.protectedMethod.sub }}</p>
    <p>Email: {{ data.protectedMethod.email }}</p>
    <p>Role: {{ data.protectedMethod.role }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { ProtectedMethodDocument } from "../gql/graphql";
// import { useRefreshToken } from "~/apollo/refresh-token";

// Create a ref to control when to execute the query
const isQueryEnabled = ref(false);
// const isRefreshingToken = ref(false); // Flag to prevent infinite loops

// const { refreshToken } = useRefreshToken();

const {
  result: data,
  loading,
  error,
  refetch,
} = useQuery(ProtectedMethodDocument, null, {
  enabled: isQueryEnabled,
});

// const {
//   result: data,
//   loading,
//   error: queryError,
//   refetch,
// } = useQuery(ProtectedMethodDocument, null, {
//   enabled: isQueryEnabled,
// });

// // Watch for query errors
// watch(queryError, async (error) => {
//   if (
//     error &&
//     error.graphQLErrors.some((e) => e.extensions?.code === "UNAUTHENTICATED") &&
//     !isRefreshingToken.value
//   ) {
//     isRefreshingToken.value = true; // Set flag to true to prevent re-entry
//     try {
//       await refreshToken();
//       await refetch();
//     } catch (refreshError) {
//       console.error("Failed to refresh token:", refreshError);
//       console.error(JSON.stringify(refreshError));
//     } finally {
//       isRefreshingToken.value = false; // Reset flag after operation
//     }
//   }
// });

// Method to trigger the query
const fetchProtectedMethod = async () => {
  isQueryEnabled.value = true;
  await refetch();
};
</script>
