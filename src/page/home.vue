<template>
  <div class="page">
    <!-- {{msg}} -->
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
        <div class="groom-module">
          <bHomeCard class="groom-module-item" v-for="i in 6" :key="i"></bHomeCard>
        </div>
        <div class="head-line">
          <span>left</span>
          <span>right</span>
        </div>
        <div class="live-module clearfix">
          <div class="l-con">
            <bHomeCard class="groom-module-item" v-for="i in 8" :key="i"></bHomeCard>
          </div>
          <div class="r-con">
            <bTabs class="clearfix">
              <bTab label="tab1" index="1">
                <bList/>
              </bTab>
              <bTab label="tab2" index="2">
                <bList/>
              </bTab>
              <bTab label="tab3" index="3">
                <span slot="label">emm</span>
                <bList/>
              </bTab>
            </bTabs>
          </div>
        </div>
        <div class="date-module"></div>
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
    bList
  },
  // components: { bNav },
  data() {
    return {
      // msg: "this is msg"
    };
  }
};
</script>

<style scoped>
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
}
.l-con {
  width: 720px;
  float: left;
}
.r-con {
  width: 260px;
  float: left;
}
.date-module {
  
}
</style>
