<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    {{ title }}
    <input type="text" v-model="input1" />
    <button type="button" @click="getData">Get</button>
    <button type="button" @click="setData">Set</button>
    <select class="form-control" v-model="region">
      <option v-for="(data, index) in option" :key="index" :value="d.v">
        {{ data.t }}
      </option>
    </select>
    <table class="table table-bordered">
      <tr v-for="(data, index) in option" :key="index">
        <td>{{ data.v }}</td>
        <td>{{ data.t }}</td>
      </tr>
    </table>
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
      option: [
        { v: "S", t: "Seoul" },
        { v: "J", t: "Jeju" },
        { v: "B", t: "Busan" },
      ],
      region: "J",
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
