<template>
  <div>
    <h1>transaction details</h1>
    <div v-if="transaction">
      <h1>{{ $route.params.id }}</h1>
      <h3>Name: {{ transaction.name }}</h3>
      <p>Price: {{ transaction.price }}</p>
    </div>
    <div v-else>Loading transaction {{ $route.params.id }}...</div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      transaction: null,
    };
  },
  created() {
    fetch("http://localhost:3000/transactions/" + this.$route.params.id)
      .then((response) => response.json())
      .then((data) => (this.transaction = data))
      .then(() => console.log(this.transaction));
  },
  setup() {
    const transactions = ref([]);
    const error = ref(null);
    console.log(transactions, error);
    const fetchAll = async () => {
      try {
        const response = await fetch("http://localhost:3000/transactions/");
        if (!response.ok) throw new Error("Something went wrong!");
        transactions.value = await response.json();
      } catch (err) {
        error.value = err;
        console.log(error.value);
      }
    };
    fetchAll();
    return { transactions };
  },
};
</script>
