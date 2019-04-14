<template>
  <div class="list-item-wrapper clearfix">
    <span class="item">{{item.id}}</span>
    <img class="item" :src="item.img" alt>
    <div class="item">
      <p class="item-title" href="#">{{item.text}}</p>
      <p class="item-point">综合评分：248.6万</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.list-item-wrapper {
  height: 50px;
  font-size: 12px;
  margin-bottom: 8px;
  overflow: hidden;
  .item {
    vertical-align: top;
    float: left;
    margin-right: 5px;
  }
  div {
    display: inline-block;
    width: 150px;
    height: 50px;
  }
  .item-title {
    height: 36px;
    overflow: hidden;
  }
  .item-point {
    color: #99a2aa;
  }
}
</style>