import Vue from "vue";
import VueRouter from "vue-router";
import EmployeesView from "../views/EmployeesView.vue";
import DetailsView from "../views/DetailsView.vue";
import EditDetailsView from "../views/EditDetailsView.vue";
import CreateView from "../views/CreateView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/staff",
  },
  {
    path: "/staff",
    name: "Staff",
    component: EmployeesView,
  },
  {
    path: "/staff:id",
    name: "Details",
    component: DetailsView,
  },
  {
    path: "/staff:id/edit",
    name: "Edit",
    component: EditDetailsView,
  },
  {
    path: "/staff/create",
    name: "Create",
    component: CreateView,
  },
  // {
  //   // path: '/about',
  //   // name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
