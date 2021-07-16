import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'element-ui/lib/theme-chalk/index.css'
import Element from 'element-ui'
import '@/assets/css/libs/index.less'
import '@/assets/css/theme/index.less'
import '@/assets/css/business/common.less'
import Sungui from 'sung-ui'
import '@/assets/js/directive.js'
Vue.use(Element)
Vue.use(Sungui)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
