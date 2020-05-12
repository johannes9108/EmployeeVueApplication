<template>
  <div class="employee" v-bind:class="{highlight: this.checkSelected}">
    <ul>
      <li>
        <router-link :to="{name: 'Details', params:{id: employee.id}}">
          <img src="../assets/placeholderPerson.png" />
          {{employee.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script>
// @ is an alias to /src

export default {
  data() {
    return {
      selected: false
    };
  },
  computed: {
    checkSelected() {
      if (this.employee.id === this.$route.params.id) {
        return true;
      } else {
        return false;
      }
    }
  },

  props: {
    employee: Object
  }
};
</script>

<style lang="scss" scoped>
.employee {
  background-color: gainsboro;
}
.highlight {
  background-color: rgb(171, 171, 171);
}
a {
  text-decoration: none;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  li {
    display: flex;
    align-items: center;
  }
}
</style>