<template>
  <div class="editDetailsView">
    <Details
      v-if="this.$root.getEmployee(this.$route.params.id) !== undefined"
      editMode
      v-bind:key="this.$route.params.id"
      :data="this.$root.getEmployee(this.$route.params.id)"
    />
  </div>
</template>
<script>
import Details from "@/components/Details";

export default {
  data() {
    return {
      editMode: false
    };
  },
  components: {
    Details
  }
};
</script>

<style lang="scss">
.editDetailsView {
}
</style>
