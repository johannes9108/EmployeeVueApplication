<template>
  <div class="detailsView">
    <Details
      v-bind:editMode="editMode"
      v-if="getCurrentEmployee !== undefined"
      :data="getCurrentEmployee"
      v-bind:key="this.$route.params.id"
    />
  </div>
</template>
<script>
import Details from "@/components/Details";

export default {
  name: "Home",
  props: {
    editMode: Boolean
  },
  data() {
    return {
      currentEmployee: this.getCurrentEmployee
    };
  },
  components: {
    Details
  },
  computed: {
    getCurrentEmployee() {
      return this.$root.getEmployee(this.$route.params.id);
    }
  }
};
</script>

<style lang="scss">
.detailsView {
}
</style>

