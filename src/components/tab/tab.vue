<script>
export default {
  props: {
    index: {
      required: true,
      type: [Number, String]
    },
    label: {
      type: String,
      required: "tab"
    }
  },
  methods: {
    handleClick() {
      this.$parent.onChange(this.index);
    }
  },
  mounted() {
    console.log("tab", this.$slots.default);
    this.$parent.panes.push(this);
  },
  computed: {
    active() {
      return this.$parent.value === this.index;
    }
  },
  render() {
    const tab = this.$slots.label || <span>{this.label}</span>;
    const classNames = {
      tab: true,
      active: this.active
    };
    return (
      <li class={classNames} on-click={this.handleClick}>
        {tab}
      </li>
    );
  }
};
</script>
<style lang="less" scoped>
.tab {
  display: inline-block;
  margin-left: 10px;
  cursor: pointer;
  &.active {
    border-bottom: 2px solid #00a1d6;
    color: #00a1d6;
  }
}
</style>