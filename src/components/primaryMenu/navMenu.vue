<template>
  <li @mouseover="showNavMenu=true" @mouseleave="showNavMenu=false">
    <a href="#">
      <bIcon v-if="navItem.icon"></bIcon>
      <span v-if="navItem.num" class="nav-num">{{navItem.num}}</span>
      <div class="nav-title">{{navItem.title}}</div>
      <subNav v-if="showNavMenu"></subNav>
    </a>
  </li>
</template>
<script>
import bIcon from '../icon';
import subNav from './subNav';

export default {
  props: {
    navItem: {
      type: Object,
      default() {
        return { title: 'NA' };
      },
    },
  },
  components: { bIcon, subNav },
  data() {
    return { showNavMenu: false };
  },
};
</script>
<style scoped>
li {
  position: relative;
}

li a {
  text-decoration: none;
}
.nav-title,
span {
  font-size: 12px;
  color: black;
}

.nav-num {
  background-color: #ffafc9;
  color: white;

  padding: 1px 3px;
  border-radius: 3px;
}
</style>

