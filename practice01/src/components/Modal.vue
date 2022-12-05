<template>
  <div class="wrap">
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    text: String,
  },
};
</script>

<style>
.wrap {
  position: fixed;
  left: 0;
  top: 35%;
  right: 0;
  margin: 0 auto;
  width: 500px;
  height: 500px;
}
</style>
