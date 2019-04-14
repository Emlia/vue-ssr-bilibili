<template>
  <div class="car-wrapper">
    <div class="carousel-box" :style="{width:'500%',marginLeft:-loc*100+'%'}">
      <a href="#" v-for="(item,index) in picList" :key="index">
        <img style="width:440px;height:220px;" :src="item">
      </a>
    </div>
    <slot></slot>
  </div>
</template>

<script>
const pic1 = require('./pic1.jpg');
const pic2 = require('./pic2.jpg');
const pic3 = require('./pic3.jpg');
const pic4 = require('./pic4.jpg');
const pic5 = require('./pic5.jpg');

export default {
  data() {
    return {
      picList: [pic1, pic2, pic3, pic4, pic5],
      loc: 0,
    };
  },
  created() {
    setInterval(() => {
      this.loc = (this.loc + 1) % 5;
      // console.log(this.loc);
    }, 3000);
  },
};
</script>

<style  scoped>
.car-wrapper {
  width: 440px;
  height: 220px;
  border-radius: 4px;
  overflow: hidden;
}
.carousel-box {
  width: 500%;
  transition: all 3s ease;
}
.carousel-box ::after {
  clear: both;
}
a {
  float: left;
}
</style>

