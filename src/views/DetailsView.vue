<template>
  <div class="detailsView">
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
    <Details
      v-bind:key="this.$route.params.id"
      :data="this.$root.getEmployee(this.$route.params.id)"
    />
  </div>
</template>
<script>
import Employee from "@/components/Employee";
import Details from "@/components/Details";

export default {
  name: "Home",
  components: {
    Employee,
    Details
  }
};
</script>

<style lang="scss">
.detailsView {
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

