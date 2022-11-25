const userMutation = {
  SET_TOKEN(state, token) {
    state.token = token;
  },

  SET_REFRESH_TOKEN(state, refreshToken) { 
    state.refreshToken = refreshToken;
  },

  SET_USER(state, user) {
    state.user = user;
  }
}

export default userMutation;