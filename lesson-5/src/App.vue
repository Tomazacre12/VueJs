<template>
  <div>
    <h1 class="fade">VueJS3 Torurials</h1>
    <Modal
      v-if="isShowModal"
      title="New title"
      content="New content"
      theme="example"
      @cancel="onToggleModal"
    >
      <template v-slot:footer>
        <div>
          <button @click="onToggleModal">Cancel</button>
        </div>
      </template>
      <label for="">Name</label>
      <input type="password" />
    </Modal>
    <button @click="onToggleModal">Toggle moddal</button>
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      isShowModal: false,
    };
  },
  methods: {
    onToggleModal() {
      this.isShowModal = !this.isShowModal;
    },
  },
};
</script>
