import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App'
import Home from './Home'
import Privacy from './Privacy'

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/privacy",
    component: Privacy
  }
]

new Vue({
  el: '#app',
  components: { App },
  router: new VueRouter({
    routes
  }),
  template: '<App/>'
});
