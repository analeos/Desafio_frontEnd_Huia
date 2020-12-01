import Vue from 'vue'

import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import NotFound from './pages/404.vue'

const routes = {
  '/': Home,
  '/maxdoctor': Login,
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})