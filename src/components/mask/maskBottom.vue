<template>
  <div class="mask-wrapper" :style="{textLayout,opacity:maskShow?'0.6':'0'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    // flex-start | flex-end | center | space-between | space-around;
    layout: {
      type: String,
      default() {
        return "center";
      }
    },
    maskShow: {
      type: Boolean,
      default() {
        return true;
      }
    }
  },
  data() {
    return {
      textLayout: {
        justifyContent: this.layout
      }
    };
  },
  watch: {},
  computed: {

  },
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style  scoped>
.mask-wrapper {
  /* background: linear-gradient(red, blue); */
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  width: 100%;
  height: 20px;
  bottom: 0;
  position: absolute;
  z-index: 20;
  color: white;
  font-size: 12px;
  display: flex;
  align-content: center;
}
</style>