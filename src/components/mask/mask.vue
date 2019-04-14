<template>
  <div
    class="wapper-bg"
    :style="{opacity:maskShow?'0.6':'0'}"
    @click="handleClick"
    @mouseover="handleHover"
    @mouseleave="handleLeave"
  >
    <slot></slot>
    <!-- <div>this is mask</div> -->
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      maskShow: false
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleHover() {
      if (!this.maskShow) {
        this.maskShow = true;
      }
    },
    handleLeave() {
      if (this.maskShow) {
        this.maskShow = false;
      }
    },
    handleClick() {
      console.log("mask is clicked");
      this.$emit("maskClicked");
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.wapper-bg {
  background-color: black;
  position: absolute;
  z-index: 20;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 12px;
  color: white;
}
</style>