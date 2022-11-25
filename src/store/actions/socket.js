import Vue from "vue";
import vueSocketInstance from "../../services/socket";


const socketAction = {
  async connectSocket({ commit }) {
    try {
      await Vue.use(vueSocketInstance);
      commit("CONNECT_SOCKET");
    } catch (e) {
      commit("DISCONNECT_SOCKET");
    }
  },

};

export default socketAction;
