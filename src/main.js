import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  ImagePlugin,
  BootstrapVue,
  IconsPlugin,
  ToastPlugin,
  CarouselPlugin
} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import VueSweetalert2 from 'vue-sweetalert2'
// import '@firebase/auth'
require('dotenv').config()

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(ToastPlugin)
Vue.use(CarouselPlugin)
Vue.use(ImagePlugin)
Vue.use(Chartkick.use(Chart))
Vue.use(VueSweetalert2)
Vue.use(require('vue-moment'))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
