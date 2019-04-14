<template>
  <ul class="wrapper">
    <li v-for="(item,index) in list" :key="index">
      <a href="#" class="nav-item">
        <span>{{item}}</span>
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      list: ['MAD', '3D', '短片', 'zonghe'],
    };
  },
};
</script>
<style scoped>
.wrapper {
  position: absolute;
  left: 0;
  width: 120px;
  list-style: none;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
  border-radius: 0 0 4px 4px;
  z-index: 2;
  overflow: hidden;
}
li {
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  text-align: left;
  padding-left: 22px;
  background: url(./icons.png) no-repeat 12px -1613px;
  transition: all 0.2s;
}
li:hover {
  background-color: #eee;
  background-position: 17px -1613px;
  padding-left: 27px;
}
.nav-item {
  text-decoration: none;
  color: black;
  display: inline-block;
}
.nav-item span {
  font-size: 12px;
}
</style>

