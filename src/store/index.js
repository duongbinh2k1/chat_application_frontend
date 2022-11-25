import Vue from 'vue'
import Vuex from 'vuex'

import socketState from "./state/socket"
import socketMutation from "./mutation/socket"
import socketAction from "./actions/socket"

import userState from "./state/user"
import userMutation from "./mutation/user"
import userAction from "./actions/user"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...socketState,
    ...userState,
  },
  getters: {},
  mutations: {
    ...socketMutation,
    ...userMutation
  },
  actions: {
    ...socketAction,
    ...userAction
  },
  modules: {},
});
