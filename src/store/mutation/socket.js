const socketMutation = {
  CONNECT_SOCKET(state) {
    state.isConnectedSocket = true;
  },

  DISCONNECT_SOCKET(state) {
    state.isConnectedSocket = false;
  },

};

export default socketMutation;