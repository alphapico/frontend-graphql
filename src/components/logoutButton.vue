<template>
  <button @click="handleLogout">Logout</button>
  <div v-if="logoutLoading">Logging out...</div>
  <div v-if="logoutError">Error: {{ logoutError.message }}</div>
</template>

<script setup lang="ts">
import { useMutation } from "@vue/apollo-composable";
import { LogoutDocument } from "../gql/graphql";

const {
  mutate: logout,
  loading: logoutLoading,
  error: logoutError,
} = useMutation(LogoutDocument);

const handleLogout = async () => {
  try {
    const response = await logout();
    console.log("Logout successful:", response);
    // You might want to clear local state or redirect the user after logout
  } catch (error) {
    console.error("Logout error:", error);
  }
};
</script>
