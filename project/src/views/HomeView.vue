<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    {{ title }}
    <input type="text" v-model="input1" />
    <button type="button" @click="getData" />
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
  methods: {
    getData() {
      alert(this.input1);
    },
  },
};
</script>
