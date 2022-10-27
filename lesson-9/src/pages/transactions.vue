<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div v-if="transactions.length">
      `
      <div
        class="item"
        v-for="transaction in transactions"
        :key="transaction.id"
      >
        <router-link :to="`/transactions/${transaction.id}`">{{
          transaction.name
        }}</router-link>
        <div class="price">Price: {{ transaction.price }}</div>
      </div>
      `
    </div>
    <div v-else>Loading Transactions...</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transactions: [],
    };
  },
  created() {
    fetch("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((data) => (this.transactions = data));
  },
};
</script>
