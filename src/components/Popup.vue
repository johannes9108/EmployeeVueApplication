<template>
  <div class="popup">
    <button @click="removeEmployee()">Delete</button>
    <button @click="cancel">Cancel</button>
  </div>
</template>
<script>
export default {
  props: {
    id: Number
  },
  methods: {
    removeEmployee() {
      this.$root.removeEmployee(this.id);
    },
    cancel() {
      this.$emit("close");
    }
  }
};
</script>
<style lang="scss" scoped>
.popup {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  background: salmon;
}
</style>