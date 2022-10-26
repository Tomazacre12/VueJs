<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1>transactions</h1>
    <div class="item" v-for="transaction in transactions" :key="transaction.id">
      <router-link :to="`/transactions/${transaction.id}`">{{
        transaction.name
      }}</router-link>
      <div class="price">Price: {{ transaction.price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transactions: [
        {
          id: 1,
          name: "a",
          price: 100,
        },
        {
          id: 2,
          name: "b",
          price: 200,
        },
        {
          id: 210581,
          name: "god",
          price: 1981,
        },
      ],
    };
  },
};
</script>
