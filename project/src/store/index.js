import { createStore } from "vuex";

export default createStore({
  state: {
    test: "test",
  },
  getters: {},
  mutations: {
    SET_TEST(state, value) {
      state.test = value;
    },
  },
  actions: {
    //비동기 호출
    TIME({ commit }, value) {
      return setTimeout(() => {
        commit("SET_TEST", value);
      }, 1000);
    },
  },
  modules: {},
});
