<template>
  <div id="app">
    <router-link to="/">Goto Index</router-link>
    <router-link to="/bar">Goto Bar</router-link>
    <router-link to="/home">Goto home</router-link>
    <router-view/>
  </div>
</template>

<script>
import api from "./api";
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
  beforeRouteEnter(to, from, next) {
    console.log("todo before enter", this);
    next(vm => {
      console.log("after enter vm.id is ", vm.id);
    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log("todo update enter");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("todo leave enter");
    next();
  },
  beforeCreate() {
    console.log("App.vue beforeCreate");
  },

  created() {
    console.log("App.vue created");
  },

  beforeMount() {
    console.log("App.vue beforeMount");
  },

  mounted() {
    console.log("App.vue mounted");
    api.getBilibiliIndex();
  }
};
</script>

<style lang="less">
* {
  margin: 0px;
  padding: 0px;
}
html {
  min-width: 980px;
  overflow-y: scroll;
  background-color: #fff;
  color: black;
  font-size: 16px;
}
.clearfix {
  zoom: 1;
}
.clearfix::after {
  clear: both;
  display: table;
  content: "";
  height: 0;
}
</style>
