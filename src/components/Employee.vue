<template>
  <div v-if="employee" class="employee">
    <Popup v-if="showPopup" @close="showPopup = false" :id="employee.id" />
    <ul>
      <router-link :to="{name: 'Details', params:{id: employee.id}}">
        <li>
          <div>
            <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
              />
            </svg>
            {{employee.name}}
          </div>
          <button @click.once="removeEmployee()">
            <img src="../assets/cross.svg" alt="delete" />
          </button>
        </li>
      </router-link>
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
      isSelected: false,
      showPopup: false
    };
  },
  methods: {
    removeEmployee() {
      this.showPopup = true;
    },
    selected() {
      this.isSelected = true;
      // this.$emit("highLightEvent", this.employee.id);
    }
  },
  computed: {
    styleObject() {
      if (this.employee.id === this.$route.params.id && this.selected == true) {
        return { highlight: true };
      } else {
        return { highlight: false };
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
}
.highlight {
  background-color: rgb(159, 53, 53);
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
    justify-content: space-between;

    * {
      background-color: transparent;
      border: none;
    }
    button {
      align-self: flex-end;
      img {
        max-height: 1rem;
      }
      svg {
      }
    }
  }
}
</style>