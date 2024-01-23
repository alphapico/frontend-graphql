<template>
  <button @click="fetchCharges">Fetch Charges</button>
  <div v-if="loading">Loading...</div>
  <div v-if="error">Error: {{ error.message }}</div>
  <div v-if="chargesData">
    <div v-for="charge in processedCharges" :key="charge.chargeId">
      <p>Charge ID: {{ charge.chargeId }}</p>
      <p>Code: {{ charge.code }}</p>
      <p>Name: {{ charge.name }}</p>
      <p>Addreses: {{ charge.addresses }}</p>
      <p>Local Exchange Rates: {{ charge.localExchangeRates }}</p>
      <p>Hosted URL: {{ charge.hostedUrl }}</p>
      <p>Cancel URL: {{ charge.cancelUrl }}</p>
      <p>Customer Info: {{ charge.customer?.name }}</p>
      <!-- Add more fields as needed -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { GetChargesDocument, type Charge } from "../gql/graphql";

const chargesVariables = ref({
  // Set your default variables here
  limit: 10, // Example limit
  // code, cursor, customerId can be added as needed
});

// Create a ref to control when to execute the query
const isQueryEnabled = ref(false);

const {
  result: chargesData,
  loading,
  error,
  refetch: refetchCharges,
} = useQuery(GetChargesDocument, chargesVariables, {
  enabled: isQueryEnabled, // Initially do not fetch
});

const fetchCharges = async () => {
  isQueryEnabled.value = true;
  await refetchCharges();
};

const processedCharges = computed(() => {
  return (
    chargesData.value?.getCharges.data.map((charge) => charge as Charge) || []
  );
});
</script>
