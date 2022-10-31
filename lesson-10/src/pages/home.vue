<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1>Homepage</h1>
    <h2>{{ firstName }}</h2>
    <p>{{ car }}</p>
    <button @click="onChangeSomething">Nhấp ik</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  setup() {
    const firstName = ref("Sky Albert");
    const car = reactive({
      price: 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
      name: "Mec",
    });

    function onChangeSomething() {
      console.log("running there...");
      console.log(car);
      firstName.value = "Tran Van Phuong";
      car.price = 1;
    }
    return { car, firstName, onChangeSomething };
  },
};
</script>
