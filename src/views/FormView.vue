<template>
  <div class="form">
    <input type="text" placeholder="Username" v-model="credentials.username" />
    <input type="password" placeholder="Password" v-model="credentials.password" />
    <button @click="submit()">Submit</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      credentials: {
        username: "",
        password: ""
      }
    };
  },

  methods: {
    submit() {
      sessionStorage.setItem("credentials", JSON.stringify(this.credentials));
      this.$router.push("/staff");
    }
  }
};
</script>
<style>
</style>