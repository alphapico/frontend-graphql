<template>
  <div>
    <LoginButton />
    <LoginAdminButton />
    <!-- <RefreshAccessTokenButton /> -->
    <ProtectedData />
    <GetChargeButton />
    <SuspendCustomer />
    <ReinstateCustomer />
    <LogoutButton />
  </div>
</template>

<script setup>
import LoginButton from "./src/components/loginButton.vue";
import LoginAdminButton from "./src/components/loginAdminButton.vue";
import RefreshAccessTokenButton from "./src/components/refreshAccessTokenButton.vue";
import ProtectedData from "./src/components/protectedData.vue";
import LogoutButton from "./src/components/logoutButton.vue";
import GetChargeButton from "./src/components/getCharges.vue";
import SuspendCustomer from "./src/components/suspendCustomer.vue";
import ReinstateCustomer from "./src/components/reinstateCustomer.vue";
</script>

<!-- <script setup lang="ts">
import { useMutation, useQuery } from "@vue/apollo-composable";
import { ref } from "vue";
import { computed } from "vue";

import { graphql } from "./src/gql";

// const Hello = graphql(/* GraphQL */ `
//   query Hello {
//     hello
//   }
// `);
// const { result, loading, error } = useQuery(Hello);
// console.log({ result, loading, error });

// const helloResult = computed(() => {
//   return result.value ? result.value.hello : null;
// });

const Login = graphql(/* GraphQL */ `
  mutation Login($input: LoginInput!) {
    login(input: $input)
  }
`);

const ProtectedMethod = graphql(/* GraphQL */ `
  query ProtectedMethod {
    protectedMethod {
      sub
      email
      role
    }
  }
`);

const {
  mutate: login,
  loading: loginLoading,
  error: loginError,
} = useMutation(Login);

// Initially disable the query
const isProtectedQueryEnabled = ref(false);

const {
  result: protectedMethodResult,
  loading: protectedMethodLoading,
  error: protectedMethodError,
  refetch: refetchProtectedMethod,
} = useQuery(ProtectedMethod, null, { enabled: isProtectedQueryEnabled });

const handleLogin = async () => {
  try {
    const response = await login({
      input: {
        email: "realtimestack@gmail.com",
        password: "test12345",
      },
    });
    console.log("Login successful:", response);

    // Enable and fetch protected data after successful login
    isProtectedQueryEnabled.value = true;
    await refetchProtectedMethod();
    // Handle successful login here, e.g., redirect or fetch user data
  } catch (error) {
    console.error("Login error:", error);
  }
};
</script> -->

<!-- <template>
  <div>
    <NuxtWelcome />
    <div v-if="loading">Loading...</div>
    <div v-if="error">Error: {{ error.message }}</div>
    <div v-if="helloResult">{{ helloResult }}</div>
    <button v-if="!loginLoading" @click="handleLogin">Login</button>
    <div v-if="loginLoading">Logging in...</div>
    <div v-if="loginError">Error: {{ loginError.message }}</div>
    <div v-if="protectedMethodLoading">Loading protected data...</div>
    <div v-if="protectedMethodError">
      Error: {{ protectedMethodError.message }}
    </div>
    <div v-if="protectedMethodResult">
      <p>Sub: {{ protectedMethodResult.protectedMethod.sub }}</p>
      <p>Email: {{ protectedMethodResult.protectedMethod.email }}</p>
      <p>Role: {{ protectedMethodResult.protectedMethod.role }}</p>
    </div>
  </div>
</template> -->
