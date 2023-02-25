import { createStore } from 'vuex'
import mainstore from './modules/mainstore'
import currencies from './modules/currencies'


export default createStore({
  modules: {
    mainstore,
    currencies
}
})  


/*
import { createStore } from 'vuex'

export default createStore({
  state: {

  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
*/
