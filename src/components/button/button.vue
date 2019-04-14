<template>
  <div class="btn-wrapper">
    <bIcon color="#f25d8e"/>
    <slot/>
  </div>
</template>
<script>
import bIcon from '../icon';

export default {
  props: {},
  components: {
    bIcon,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.btn-wrapper {
  background-color: #fff;
  border-radius: 4px;
  padding: 0 6px;
  background-color: hsla(0, 0%, 100%, 0.88);
  transition: background-color 0.2s;
  font-size: 12px;
  color: #f25d8e;
  cursor: pointer;
}
.btn-wrapper:hover {
  background-color: #fff;
}
</style>
