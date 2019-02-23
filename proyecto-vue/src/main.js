import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(faCoffee)
Vue.use(BootstrapVue)



Vue.component('font-awesome-icon', FontAwesomeIcon) // Register component globally
library.add(fas) // Include needed icons.

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')