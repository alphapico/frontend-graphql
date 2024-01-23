<template>
  <button @click="handleLogin">Login Admin</button>
  <div v-if="loginLoading">Logging in...</div>
  <div v-if="loginError">Error: {{ loginError.message }}</div>
</template>

<script setup lang="ts">
import { useMutation } from "@vue/apollo-composable";
import { LoginDocument } from "../gql/graphql";

const {
  mutate: login,
  loading: loginLoading,
  error: loginError,
} = useMutation(LoginDocument);

const handleLogin = async () => {
  try {
    const response = await login({
      input: {
        email: "ha@tequnity.com",
        password: "admin12345",
      },
    });
    console.log("Login Admin successful:", response);
  } catch (error) {
    console.error("Login Admin error:", error);
  }
};
</script>
