import Vue from "vue";
import VueRouter from "vue-router";
import EmployeesView from "../views/EmployeesView.vue";
import DetailsView from "../views/DetailsView.vue";
import CreateView from "../views/CreateView.vue";
import FormView from "../views/FormView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: FormView,
  },

  {
    path: "/staff",
    name: "Staff",
    component: EmployeesView,
    children: [
      {
        path: ":id",
        name: "Details",
        component: DetailsView,
        props: {
          editMode: false,
        },
      },
      {
        path: ":id/edit",
        name: "Edit",
        component: DetailsView,
        props: {
          editMode: true,
        },
      },
      {
        path: "create",
        name: "Create",
        component: CreateView,
      },
    ],
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
