import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import data from "./assets/data.json";
Vue.config.productionTip = false;

new Vue({
  data() {
    return {
      idCounter: data.database.length + 1,
      employees: data.database,
    };
  },
  methods: {
    getEmployee(id) {
      return this.employees.find((employee) => employee.id == id);
    },
    addEmployee(newEmployee) {
      newEmployee.id = this.idCounter++;
      this.employees.push(JSON.stringify(newEmployee));
    },
  },

  router,
  render: (h) => h(App),
}).$mount("#app");
