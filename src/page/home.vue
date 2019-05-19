<template>
  <div class="page">
    <bNav></bNav>
    <div class="page-ccontent">
      <bPrimaryMenu></bPrimaryMenu>
      <div class="chief_recommend">
        <bCarousel class="bCarousel">
          <maskBottom layout="space-around">
            <span>zhe shi zuo bian de</span>
            <span>zhe shi you bian de</span>
          </maskBottom>
        </bCarousel>
        <div class="groom-module clearfix">
          <bHomeCard class="groom-module-item" v-for="i in 6" :key="i"></bHomeCard>
        </div>
        <div class="head-line">
          <div class="live-head-left">
            <bIcon :size="40"></bIcon>
            <span class="live-head-txt">直播</span>
          </div>
          <div class="live-head-right">
            <span>在线观看：4323444</span>
            <em></em>
            <span>最新投稿：36462</span>
          </div>
        </div>
        <div class="live-module clearfix">
          <div class="l-con">
            <bHomeCard class="groom-module-item" v-for="i in 8" :key="i"></bHomeCard>
          </div>
          <div class="r-con">
            <bTabs class="clearfix">
              <bTab label="全部" index="1">
                <bList/>
              </bTab>
              <bTab label="tab2" index="2">
                <span slot="label">原创</span>
                <!-- <bList/> -->
                <div>
                  <span>emmm</span>
                  <span>this is a tab contani</span>
                </div>
              </bTab>
            </bTabs>
          </div>
        </div>
        <div class="date-module clearfix"></div>
      </div>
    </div>
  </div>
</template>

<script>
import bNav from "../components/nav";
import bPrimaryMenu from "../components/primaryMenu";
import bCarousel from "../components/carousel";
import maskBottom from "../components/mask";
import bHomeCard from "../components/card";
import bTabs from "../components/tab";
import bTab from "../components/tab/tab";
import bList from "../components/list";
import bIcon from "../components/icon";

export default {
  name: "home",
  components: {
    bNav,
    bPrimaryMenu,
    bCarousel,
    maskBottom,
    bHomeCard,
    bTabs,
    bTab,
    bList,
    bIcon
  },
  // components: { bNav },
  data() {
    return {
      // msg: "this is msg"
    };
  }
};
</script>

<style lang="less" scoped>
.page {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.page-ccontent {
  width: 980px;
}
.chief_recommend {
  width: 980px;
  max-width: 980px;
  height: 260px;
  position: relative;
}
.bCarousel {
  position: absolute;
}
.groom-module {
  /* width: 100%; */
  height: 260px;
  padding-left: 440px;
}
.groom-module::after {
  clear: both;
}
.groom-module-item {
  float: left;
  margin: 0 0 20px 20px;
}
.head-line {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-left: 15px;
}
.l-con {
  width: 720px;
  float: left;
}
.r-con {
  width: 260px;
  float: left;
}
.live-head-left {
  display: flex;
  align-items: center;
}
.live-head-txt {
  font-size: 24px;
  margin-left: 8px;
}
.live-head-right {
  background: #e5e9ef;
  border-radius: 5px;
  height: 34px;
  line-height: 34px;
  padding: 0 8px;
  & em {
    display: inline-block;
    border-left: 1px solid #b8c0cc;
    height: 10px;
    line-height: 10px;
    margin: 12px 15px 0;
    vertical-align: top;
  }
}
.live-head-right span {
  display: inline-block;
  font-size: 12px;
  color: #6d757a;
}
</style>
