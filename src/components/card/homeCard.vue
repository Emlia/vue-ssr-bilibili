<template>
  <div class="wrapper" @mouseover="handleHover" @mouseleave="handleLeave">
    <bBottomMask v-show="bBottomMaskShow" >
      <span>「平成」动画歌曲大奖！梦回这31年间的日本动画金曲（2010~2019年篇）【收藏不亏】</span>
    </bBottomMask>
    <bMask>
      <span>「平成」动画歌曲大奖！梦回这31年间的日本动画金曲（2010~2019年篇）【收藏不亏】</span>
      <span>upzhu : emlia</span>
      <span>bo fang : 45w</span>
    </bMask>
  </div>
  <!-- <img src="./home-card.jpg" class="wrapper" alt> -->
</template>

<script>
import bMask from "../mask/mask";
import bBottomMask from "../mask";
export default {
  components: { bMask, bBottomMask },
  props: {},
  data() {
    return {
      // bgi: require("./home-card.jpg")
      bBottomMaskShow: true
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleHover() {
      if (this.bBottomMaskShow) {
        this.bBottomMaskShow = false;
      }
    },
    handleLeave() {
      if (!this.bBottomMaskShow) {
        this.bBottomMaskShow = true;
      }
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.wrapper {
  width: 160px;
  height: 100px;
  background-image: url(./home-card.jpg);
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  display: inline-block;
}
</style>