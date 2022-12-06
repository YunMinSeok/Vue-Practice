<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <button @click="handle_toggle" type="button">모달창 띄우기</button>
  <AlertModal v-show="is_show" :text="text" @handleModal="is_show = false" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import AlertModal from "./components/AlertModal.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    AlertModal,
  },
  data: () => {
    // #1
    return {
      is_show: false,
      text: "",
    };
  },
  methods: {
    handle_toggle: function () {
      this.text = String(Math.random());
      this.is_show = !this.is_show; // #2, #3
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
