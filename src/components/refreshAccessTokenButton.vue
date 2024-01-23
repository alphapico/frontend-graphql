<template>
  <button @click="fetchRefreshMethod">Fetch Refresh AccessToken</button>
  <div v-if="loading">Loading...</div>
  <div v-if="error">Error: {{ error.message }}</div>
</template>

<script setup lang="ts">
import { useMutation } from "@vue/apollo-composable";
import { RefreshTokensDocument } from "../gql/graphql";

const { mutate: refresh, loading, error } = useMutation(RefreshTokensDocument);

// Method to trigger the query
const fetchRefreshMethod = async () => {
  try {
    const response = await refresh();
    console.log("Refresh Token successful:", response);
  } catch (error) {
    console.error("Refresh Token error:", error);
  }
};
</script>
