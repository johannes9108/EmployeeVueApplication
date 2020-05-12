<template>
  <div v-if="employee" class="employee" v-bind:class="{highlight: this.checkSelected}">
    <ul>
      <li>
        <Popup v-if="showPopup" @close="showPopup = false" :id="employee.id" />
        <router-link :to="{name: 'Details', params:{id: employee.id}}">
          <img src="../assets/placeholderPerson.png" />
          {{employee.name}}
        </router-link>
        <button @click="removeEmployee()">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import Popup from "./Popup";
export default {
  components: {
    Popup
  },
  data() {
    return {
      selected: false,
      showPopup: false
    };
  },
  methods: {
    removeEmployee() {
      this.showPopup = true;
    }
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
  position: relative;
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