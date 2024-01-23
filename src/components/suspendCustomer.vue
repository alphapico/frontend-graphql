<template>
  <button @click="handleSuspendCustomer">Suspend Customer</button>
  <div v-if="suspendLoading">Suspending...</div>
  <div v-if="suspendError">Error: {{ suspendError.message }}</div>
  <div v-if="suspendResult">
    <p>Customer ID: {{ suspendResult.customerId }}</p>
    <p>Name: {{ suspendResult.name }}</p>
    <p>Email: {{ suspendResult.email }}</p>
    <p>Status: {{ suspendResult.customerStatus }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useMutation } from "@vue/apollo-composable";
import {
  SuspendCustomerDocument,
  type SuspendCustomerMutation,
  CustomerChargeFragmentFragmentDoc,
  type CustomerChargeFragmentFragment,
} from "../gql/graphql";
import { type FragmentType, useFragment } from "../gql/fragment-masking";

const customerIdToSuspend = ref(5); // Replace with actual customer ID

const {
  mutate: suspendCustomer,
  loading: suspendLoading,
  error: suspendError,
} = useMutation(SuspendCustomerDocument);

const suspendResult: Ref<CustomerChargeFragmentFragment | null> = ref(null);

const handleSuspendCustomer = async () => {
  try {
    const response = await suspendCustomer({
      customerId: customerIdToSuspend.value,
    });
    if (response && response.data) {
      suspendResult.value = useFragment(
        CustomerChargeFragmentFragmentDoc,
        response.data.suspendCustomer
      );
      console.log("Customer suspended successfully");
    } else {
      console.error("No response received from the mutation");
    }
  } catch (error) {
    console.error("Error suspending customer:", error);
  }
};
</script>
