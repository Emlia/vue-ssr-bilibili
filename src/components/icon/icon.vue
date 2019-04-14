<template>
  <span class="iconfont" :style="{fontSize:size+'px',color:color}">&#xe8b1;</span>
</template>
<script>
export default {
  name: 'bIcon',
  props: {
    size: {
      type: Number || String,
      default() {
        return 20;
      },
    },
    color: {
      type: String,
      default() {
        return '#00a1d6';
      },
    },
  },
  data() {
    return {
      //   size: "50px"
    };
  },
  computed: {},
};
</script>
<style scoped>
@font-face {
  font-family: "iconfont";
  src: url("./iconfont.eot");
  src: url("./iconfont.eot?#iefix") format("embedded-opentype"),
    url("./iconfont.woff2") format("woff2"),
    url("./iconfont.woff") format("woff"),
    url("./iconfont.ttf") format("truetype"),
    url("./iconfont.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  vertical-align: bottom;
}
</style>
