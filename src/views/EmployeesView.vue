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
  </div>
</template>

<script>
// @ is an alias to /src
import Employee from "@/components/Employee";

export default {
  name: "Staff",
  components: {
    Employee
  }
};
</script>

<style lang="scss">
.employeesView {
  display: grid;
  grid-template-columns: 1fr 1fr;
  & > div {
    background-color: gainsboro;
    * {
      background-color: inherit;
    }
  }
}
</style>
