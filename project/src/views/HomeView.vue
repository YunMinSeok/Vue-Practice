<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    {{ title }}
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
    };
  },
};
</script>
