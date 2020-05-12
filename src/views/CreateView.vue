<template>
  <div class="createView">
    <label for>Name</label>
    <input type="text" v-model="name" />
    <label for>Title</label>
    <input type="text" v-model="title" />
    <label for>Mobile</label>
    <input type="text" v-model="mobile" />
    <label for>Email</label>
    <input type="text" v-model="email" />

    <button @click="createEmployee">Create employee</button>
  </div>
</template>

<script>
export default {
  date() {
    return {
      name: "Testing",
      title: "Testing",
      mobile: "Testing",
      email: "Testing"
    };
  },
  methods: {
    // createEmployee() {
    //   let newEmployee = {
    //     name: this.name,
    //     title: this.title,
    //     mobile: this.mobile,
    //     email: this.email
    //   };
    //   this.$root.addEmployee(newEmployee);
    // }
  }
};
</script>

<style lang="scss" scoped>
.createView {
  display: flex;
  flex-direction: column;
}

button {
  align-self: center;
}
</style>