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
  actions: {},
  modules: {},
});
