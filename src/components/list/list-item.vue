<template>
  <div class="list-item-wrapper clearfix">
    <span class="item num">{{item.id}}</span>
    <img class="item" :src="item.img" alt>
    <div class="item detail">
      <p class="item-title" href="#">{{item.text}}</p>
      <p class="item-point">综合评分：248.6万</p>
    </div>
    <p class="item-txt" href="#">{{item.text}}</p>
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
  /*height: 50px;*/
  font-size: 12px;
  margin-bottom: 8px;

  .num {
    background: #f25d8e;
    display: inline-block;
    width: 18px;
    line-height: 18px;
    text-align: center;
    color: white;
    border-radius: 4px;
    font-size: 12px;
    font-weight: bolder;
  }
  &:nth-child(n + 4) .num {
    background: #b8c0cc;
  }

  img {
    border-radius: 4px;
  }
  .item {
    vertical-align: top;
    float: left;
    margin-right: 3px;
  }
  &:nth-child(n + 2) .detail,
  &:nth-child(n + 2) img {
    display: none;
  }
  &:first-child .item-txt {
    display: none;
  }
  .detail {
    display: inline-block;
    width: 150px;
    height: 50px;
  }
  .item-title {
    color: black;
    height: 36px;
    line-height: 18px;
    overflow: hidden;
  }
  .item-point {
    margin-top: -2px;
    color: #99a2aa;
  }
  .item-txt {
    height: 18px;
    line-height: 18px;
    margin-top: 20px;
    overflow: hidden;
  }
}
</style>