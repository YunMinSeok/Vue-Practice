<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <button @click="handle_toggle" type="button">모달창 띄우기</button>
  <AlertModal v-show="is_show" :text="text" @handleModal="is_show = false" />
  <p v-html="policy" @click="click"></p>
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
      policy: "",
    };
  },
  methods: {
    handle_toggle: function () {
      this.text = String(Math.random());
      this.is_show = !this.is_show; // #2, #3
    },
    click: function () {
      console.log("click");
    },
  },
  created() {
    this.policy =
      '<div><a href="#1">1번으로 이동</a><br/><a href="#2">2번으로 이동</a><br/><a href="#3">3번으로 이동</a><br/><a href="#4">4번으로 이동</a><br/><br/><br/><br/><br/><br/><br/><p id="1">1번</p><p id="2">2번</p><p id="3">3번</p><p id="4">4번</p></div>';
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
p {
  width: 100%;
  height: 500px;
}
</style>
