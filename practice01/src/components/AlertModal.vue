<template>
  <div class="wrap">
    <span>{{ text }}</span>
    <button @click="handle_toggle" type="button">모달창 닫기</button>
  </div>
</template>

<script>
export default {
  name: "AlertModal",
  props: {
    text: String,
    isShow: Boolean,
  },
  methods: {
    handle_toggle: function () {
      this.is_show = !this.is_show; // #2, #3
    },
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
