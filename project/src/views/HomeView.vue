<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    {{ title }}
    <input type="text" v-model="input1" />
    <button type="button" @click="getData">Get</button>
    <button type="button" @click="setData">Set</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data() {
    return {
      title: "이게 vue다",
      input1: "abc",
    };
  },
  watch: {
    input1() {
      console.log(this.input1);
    },
  },
  methods: {
    getData() {
      alert(this.input1);
    },
    setData() {
      this.input1 = "12345";
    },
  },
};
</script>
