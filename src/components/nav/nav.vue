<template>
  <div class="nav">
    <div class="nav-bg"></div>
    <div class="nav-mask"></div>
    <div class="nav-wrapper">
      <div class="nav-con float-left">
        <ul>
          <li class="nav-item">
            <bIcon></bIcon>
            <a href="//www.bilibili.com" title="主站">主站</a>
          </li>
          <li class="nav-item">
            <a href="#" title="画友">画友</a>
          </li>
          <li class="nav-item">
            <a href="#" title="音频">音频</a>
          </li>
          <li class="nav-item">
            <a href="#" title="游戏中心">游戏中心</a>
          </li>
          <li class="nav-item">
            <a href="#" title="直播">直播</a>
          </li>
          <li class="nav-item">
            <a href="#" title="会员购">会员购</a>
          </li>
          <li class="nav-item">
            <a href="#" title="漫画">漫画</a>
          </li>
          <li class="nav-item">
            <bIcon></bIcon>
            <a href="#" title="下载APP">下载APP</a>
          </li>
        </ul>
      </div>
      <div class="nav-con float-right">
        <ul>
          <li class="nav-item">
            <bFace></bFace>
          </li>
          <li class="nav-item">
            <a href="#" title="大会员">大会员</a>
          </li>
          <li class="nav-item">
            <a href="#" title="消息">消息</a>
          </li>
          <li class="nav-item">
            <a href="#" title="动态">动态</a>
          </li>
          <li class="nav-item">
            <a href="#" title="稍后再看">稍后再看</a>
          </li>
          <li class="nav-item">
            <a href="#" title="收藏">收藏</a>
          </li>
          <li class="nav-item">
            <a href="#" title="历史">历史</a>
          </li>
          <li class="nav-item">
            <a href="#" title="投稿">投稿</a>
          </li>
        </ul>
      </div>
    </div>
    <a href="www.bilibili.com" class="head-logo"></a>
    <div class="search">
      <bButton class="search-item link-rank">排行榜</bButton>
      <bInput class="searchform search-item"/>
    </div>
  </div>
</template>

<script>
import bIcon from '../icon';
import bFace from '../face';
import bInput from '../input';
import bButton from '../button';

export default {
  name: 'bNav',
  components: { bIcon, bFace, bInput, bButton },
  data() {
    return {};
  },
};
</script>

<style  scoped>
.nav {
  width: 100%;
  min-width: 980px;
  position: relative;
}
.nav-bg {
  width: 100%;
  height: 170px;
  background-image: url(./nav-bg.png);
  background-position: center -10px;
}

.nav-mask {
  background-color: white;
  filter: blur(4px);
}
.nav-wrapper {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: hsla(0, 0%, 100%, 0.6);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
.nav-wrapper::after {
  clear: both;
}

.nav-con {
  /* margin: 8px; */
}
.float-left {
  float: left;
  margin-left: 60px;
}
.float-right {
  float: right;
  margin-right: 60px;
}
.nav-item {
  display: inline-block;
  padding: 0px 7px;
  line-height: 42px;
  text-align: center;
}
.nav-item:hover {
  background-color: rgba(255, 255, 255, 0.4);
}
.nav-item a {
  text-decoration: none;
  color: black;
  font-size: 12px;
}
.head-logo {
  background-image: url(./bilibili-spring.png);
  width: 220px;
  height: 105px;
  position: absolute;
  left: 124px;
  top: 55px;
  /* background: transparent no-repeat 0; */
  z-index: 10;
}
.search {
  position: absolute;
  bottom: 20px;
  right: 100px;
  /* background-color: rgba(0, 0, 0, 0.12); */
  /* border-radius: 6px; */
  /* display: block; */
}
.link-rank {
  height: 32px;
  line-height: 32px;
  margin-right: 3px;
}
.search-item {
  float: left;
}
.search::after {
  clear: both;
}
.searchform {
  /* background-color: rgba(0, 0, 0, 0.12); */
}
</style>
