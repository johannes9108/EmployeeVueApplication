<template>
  <div class="employeesView">
    <div>
      <Employee
        v-bind:employee="employee"
        v-for="employee in this.$root.employees"
        v-bind:key="employee.id"
      />
      <router-link :to="{name: 'Create'}">
        <button>Create</button>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Employee from "@/components/Employee";

export default {
  name: "Staff",
  components: {
    Employee
  },
  created() {
    let item = sessionStorage.getItem("credentials");
    if (item != null) {
      let credentials = JSON.parse(item);
      if (credentials.username == "admin" && credentials.password == "password")
        console.log("Welcome");
      else {
        console.log("Fel credentials");
        this.$router.push("/login");
      }
    } else {
      // Go back to Login
      console.log("Inga credentials finns");
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss">
.employeesView {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: solid black 1px;
  & > div:nth-of-type(1) {
    background-color: gainsboro;
  }
}
</style>
