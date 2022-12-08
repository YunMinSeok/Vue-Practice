<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <button @click="handle_toggle(1)" type="button">모달창1 띄우기</button>
  <button @click="handle_toggle(2)" type="button">모달창2 띄우기</button>
  <AlertModal
    v-show="is_show1"
    :text="text"
    @handleModal="is_show1 = false"
    type="default"
  />
  <AlertModal
    v-show="is_show2"
    :text="text"
    @handleModal="is_show2 = false"
    type="confirm"
  />
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
    return {
      is_show1: false,
      is_show2: false,
      text: "",
      policy: "",
    };
  },
  methods: {
    handle_toggle: function (modalNum) {
      this.text = String(Math.random());
      if (modalNum === 1) {
        this.is_show1 = !this.is_show1;
      } else {
        this.is_show2 = !this.is_show2;
      }
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
