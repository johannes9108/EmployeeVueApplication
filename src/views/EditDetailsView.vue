<template>
  <div class="editDetailsView">
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
      editMode
      v-bind:key="this.$route.params.id"
      :data="this.$root.getEmployee(this.$route.params.id)"
    />
  </div>
</template>
<script>
import Employee from "@/components/Employee";
import Details from "@/components/Details";

export default {
  data() {
    return {
      editMode: false
    };
  },
  components: {
    Employee,
    Details
  }
};
</script>

<style lang="scss">
.editDetailsView {
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
