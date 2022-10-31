<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1>Homepage</h1>
    <input type="text" v-model="searhText" />
    <ul>
      <li v-for="(customer, index) in customersFilled" :key="index">
        {{ customer }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, reactive, computed, watch } from "vue";
export default {
  props: {
    theme: {
      type: String,
      required: false,
      default: "light",
    },
  },
  setup(props, context) {
    console.log(props);
    console.log(context);
    const searhText = ref("");
    const customers = reactive(["HieuVux", "QuangVux", "LeTan", "DuyManh"]);
    const customersFilled = computed(() =>
      customers
        .map((customer) => {
          customer = customer.toLowerCase();
          return customer;
        })
        .filter((customer) => customer.includes(searhText.value.toLowerCase()))
    );

    watch(searhText, (pa, pb) => {
      console.log(pa, pb);
    });
    return { searhText, customersFilled };
  },
};
</script>
