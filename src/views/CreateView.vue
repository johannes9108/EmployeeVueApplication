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

    <router-link :to="{name: 'Staff'}">
      <button>Back to employees</button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      title: "",
      mobile: "",
      email: ""
    };
  },
  methods: {
    createEmployee() {
      let newEmployee = {
        name: this.name,
        title: this.title,
        mobile: this.mobile,
        email: this.email
      };
      this.$root.addEmployee(newEmployee);
    }
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