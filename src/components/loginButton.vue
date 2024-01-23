<template>
  <button @click="handleLogin">Login</button>
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
        email: "realtimestack@gmail.com",
        password: "test12345",
      },
    });
    console.log("Login successful:", response);
  } catch (error) {
    console.error("Login error:", error);
  }
};
</script>
