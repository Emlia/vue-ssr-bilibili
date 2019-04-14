<template>
  <div class="menu-wrapper">
    <ul class="nav-menu">
      <navMenu v-for="(item,index) in navList" :key="index" :navItem="item" class="nav-item">
      </navMenu>
    </ul>
  </div>
</template>
<script>
import bIcon from '../icon';
import navMenu from './navMenu';

export default {
  components: { bIcon, navMenu },
  data() {
    return {

      navList: [
        { title: '首页', icon: 'home' },
        { title: '动画', num: '99+' },
        { title: '番剧', num: '99+' },
        { title: '国创', num: '99+' },
        { title: '音乐', num: '99+' },
        { title: '舞蹈', num: '99+' },
        { title: '游戏', num: '99+' },
        { title: '科技', num: '99+' },
        { title: '数码', num: '99+' },
        { title: '生活', num: '99+' },
        { title: '鬼畜', num: '99+' },
        { title: '时尚', num: '99+' },
        { title: '广告', num: '99+' },
        { title: '娱乐', num: '99+' },
        { title: '影视', num: '99+' },
        { title: '放映厅', num: '99+' },
        { title: '专场', num: '99+' },
        { title: '广场', num: '99+' },
        { title: '直播', num: '99+' },
        { title: '小黑屋', num: '99+' },
      ],
    };
  },
};
</script>
<style scoped>
.menu-wrapper {
    text-align: center;
    /* margin-top: 20px; */
    padding: 8px 0 0;
}
.nav-menu {
  /* width: 100%; */
  display: inline-block;
  list-style: none;
}
.nav-menu::after {
  clear: both;
}
.nav-item {
  float: left;
  width: 46px;
  height: 48px;
}
</style>

