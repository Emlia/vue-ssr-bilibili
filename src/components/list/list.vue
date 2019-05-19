<template>
  <div>
    <ListItem class="list-item" v-for="item in list" :key="item.id" :item="item"></ListItem>
  </div>
</template>

<script>
import ListItem from "./list-item";
export default {
  components: { ListItem },
  props: {},
  data() {
    return {
      list: [
        {
          id: 1,
          img: require("./small.jpg"),
          text: "111这动画也太劲爆了吧！2019四月新番吐槽大盘点！（第一弹）"
        },
        {
          id: 2,
          img: require("./small.jpg"),
          text: "222这动画也太劲爆了吧！2019四月新番吐槽大盘点！（第一弹）"
        },
        {
          id: 3,
          img: require("./small.jpg"),
          text: "333这动画也太劲爆了吧！2019四月新番吐槽大盘点！（第一弹）"
        },
        {
          id: 4,
          img: require("./small.jpg"),
          text: "444这动画也太劲爆了吧！2019四月新番吐槽大盘点！（第一弹）"
        },
        {
          id: 5,
          img: require("./small.jpg"),
          text: "55这动画也太劲爆了吧！2019四月新番吐槽大盘点！（第一弹）"
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
</style>