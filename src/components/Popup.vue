<template>
  <div class="popup">
    <div>
      <button @click="removeEmployee()">Delete</button>
      <button @click="cancel">Cancel</button>
    </div>
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
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 200px;
    width: 50%;
    margin: auto;
  }
  button {
    outline: none;
    border: none;
    height: 30%;
    width: 30%;
    border-radius: 50%;
    padding: 10rem;
    background: white;
    font-weight: 800;
    font-style: italic;
    border-bottom: black 1px solid;
  }
}
</style>