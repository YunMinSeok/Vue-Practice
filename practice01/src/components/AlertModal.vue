<template>
  <div class="wrap">
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "AlertModal",
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
  background: #d9d9d9d9;
}
</style>
