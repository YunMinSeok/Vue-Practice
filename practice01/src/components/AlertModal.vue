<template>
  <div class="wrap">
    <span>{{ text }}</span>
    <div v-show="type === 'default'">
      <button @click="closeModal" type="button">모달창 닫기</button>
    </div>
    <div v-show="type === 'confirm'">
      <button @click="confirmValue(true)" type="button">확인</button>
      <button @click="confirmValue(false)" type="button">취소</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertModal",
  props: ["text", "isShow", "type"],
  data: () => ({}),
  methods: {
    closeModal: function () {
      this.$emit("handleModal");
    },
    confirmValue: function (value) {
      this.$emit("handleOkay", value);
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
