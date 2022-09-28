<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <div>
      <button @click="setTest">click</button>
      {{ this.$store.state.test }}
    </div>
    <router-view></router-view>
  </nav>
</template>
<script>
export default {
  name: "app",
  methods: {
    setTest() {
      //mutations SET_TEST 호출
      this.$store.dispatch("TIME", "test2");
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
