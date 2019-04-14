<script>
import TabContainer from "./tab-container";
import tabs from ".";
export default {
  props: {},
  components: { TabContainer },
  data() {
    return {
      value: "1",
      panes: []
    };
  },
  methods: {
    onChange(index) {
      this.value = index;
    }
  },
  render() {
    return (
      <div class="tabs">
        <ul class="tabs-header">{this.$slots.default}</ul>
        <tab-container panes={this.panes} />
      </div>
    );
  }
};
</script>
<style lang="less" scoped>
.tabs {
  width: 260px;
  height: 363px;
  overflow: hidden;
  .tabs-header {
    margin-bottom: 8px;
  }
}
</style>
