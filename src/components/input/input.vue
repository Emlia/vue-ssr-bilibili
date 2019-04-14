<template>
  <div class="input-wrapper">
    <input :type="type" class="input-item">
    <bIcon :size=20 class="input-icon"/>
  </div>
</template>
<script>
import bIcon from '../icon';

export default {
  props: {
    type: {
      type: String,
      default() {
        return 'text';
      },
    },
  },
  components: {
    bIcon,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.input-wrapper {
  background-color: hsla(0, 0%, 100%, 0.88);
  border-radius: 4px;
  transition: background-color 0.2s;
}
.input-wrapper:hover {
  background-color: #fff;
}
.input-item {
  width: 200px;
  height: 32px;
  line-height: 32px;
  padding: 0 12px;
  border: 0;
  background-color: transparent;
  overflow: hidden;
}
.input-item:focus {
  outline: none;
  /* border: 0; */
}
.input-icon {
  vertical-align: middle;
  margin-right: 12px;
}
</style>
