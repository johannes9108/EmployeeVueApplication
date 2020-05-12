<template>
  <div class="details">
    IMG
    <h2 contenteditable>{{firstName}}</h2>
    <router-link :to="{name: 'Details', params:{id: data.id}}" @click="updateData(data.id)">
      <button>Save</button>
    </router-link>
    <h3 contenteditable>{{data.title}}</h3>

    <ul>
      <li contenteditable>{{data.mobile}}</li>
      <li contenteditable>{{data.email}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: this.data.firstName,
      lastName: this.data.lastName,
      title: this.data.title,
      mobile: this.data.mobile,
      email: this.data.email
    };
  },
  components: {},
  props: {
    data: Object
  },
  methods: {
    updateData(id) {
      let updatedEmployee = this.$root.getEmployee(id);
      updatedEmployee.firstName;
    }
  }
};
</script>

<style lang="scss" scoped>
.details {
  background-color: salmon;
  height: 100%;
}
</style>