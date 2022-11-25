import { userAPI } from "@/utils/axiosClient";

const userAction = {
  login({ commit }, authInfo) {

    return new Promise((resolve, reject) => {
      userAPI
        .post("/login", authInfo)
        .then(response => {
          if (response.status === 200 && response.data.success === true) {
            const { accessToken, refreshToken, data } = response.data;
            commit("SET_TOKEN", accessToken);
            commit("SET_REFRESH_TOKEN", refreshToken);
            commit("SET_USER", data.user);
            resolve(response.data.success);
          } else {
            reject(response.message);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  refreshToken({ commit }, refreshToken) {
    return new Promise((resolve, reject) => {
      userAPI.post("/refresh-token", refreshToken).then(response => {
        if (response.status === 200 && response.data.success === true) {
          const { accessToken, refreshToken } = response.data;
          commit("SET_TOKEN", accessToken);
          commit("SET_REFRESH_TOKEN", refreshToken);
          resolve(response.data.success);
        } else {
          reject(response.message);
        }
      }).catch(error => { 
        reject(error);
      })
    });
  },

  register(_, userInfo) {
    return new Promise((resolve, reject) => {
      userAPI.post("/register", userInfo).then(response => {
        if (response.status === 200 && response.data.success === true) {
          resolve(response.data.success);
        } else {
          reject(response.message);
        }
      }).catch(error => { 
        reject(error);
      })
    })
  }
};

export default userAction;
