import Vue from 'vue'
import App from './App.vue'
import './resources/css/public.css'
import router from './router'
import store from './store'

const authData = require('../auth_config.json')
const domain = authData.domain
const clientId = authData.clientId
import { Auth0Plugin } from "./auth/index.js"

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: (appState: any) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
