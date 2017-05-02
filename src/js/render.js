import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import App from './../components/App.vue'
import state from './store/state.js'
import actions from './store/actions.js'
import mutations from './store/mutations.js'

Vue.use(Vuex)
Vue.use(Vuetify)

const store = new Vuex.Store({
  state,
  actions,
  mutations,
})

new Vue({
  el: '#app',
  store: store,
  render: h => h(App),
})
