<template>
  <button @click="handleReinstateCustomer">Reinstate Customer</button>
  <div v-if="reinstateLoading">Reinstating...</div>
  <div v-if="reinstateError">Error: {{ reinstateError.message }}</div>
  <div v-if="reinstateResult">
    <p>Customer ID: {{ reinstateResult.reinstateCustomer.customerId }}</p>
    <p>Name: {{ reinstateResult.reinstateCustomer.name }}</p>
    <p>Email: {{ reinstateResult.reinstateCustomer.email }}</p>
    <p>Status: {{ reinstateResult.reinstateCustomer.customerStatus }}</p>
    <p>Referral Code: {{ reinstateResult.reinstateCustomer.referralCode }}</p>
    <p>
      Referral Customer ID:
      {{ reinstateResult.reinstateCustomer.referralCustomerId }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useMutation } from "@vue/apollo-composable";
import {
  ReinstateCustomerDocument,
  type ReinstateCustomerMutation,
} from "../gql/graphql";

const customerIdToReinstate = ref(5); // Replace with actual customer ID

const {
  mutate: reinstateCustomer,
  loading: reinstateLoading,
  error: reinstateError,
} = useMutation(ReinstateCustomerDocument);

const reinstateResult: Ref<ReinstateCustomerMutation | null> = ref(null);

const handleReinstateCustomer = async () => {
  try {
    const response = await reinstateCustomer({
      customerId: customerIdToReinstate.value,
    });
    if (response && response.data) {
      reinstateResult.value = response.data;
    }

    console.log("Customer reinstated successfully");
  } catch (error) {
    console.error("Error reinstating customer:", error);
  }
};
</script>
