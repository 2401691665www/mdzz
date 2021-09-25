<template>
  <div class="header">
    <div
      class="log"
      @click="toIndex"
    >
      <img src="../assets/logo.png">
      <!-- <span class="title">APCT BLOCK</span> -->
      <div class="network">
        <span class="sp1">当前网络:  Mainnet</span>
        <!-- <span class="sp2"></span> -->
      </div>
    </div>
    <div @click="showPopup" class="il18">
      <img src="../assets/qiehuan.png">
      <span>{{language}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      language: this.$i18n.locale || "EN",
    };
  },
  methods: {
    toIndex() {
      // this.$router.push("/blockchain");
    },
    showPopup() {
      this.$dialog
        .confirm({
          title: "温馨提示",
          message: `确定要切换${
            this.language == "CN" ? "英文" : this.language == "EN" ? "中文" : ""
          }吗?`,
        })
        .then(() => {
          if (this.language == "CN") {
            this.language = "EN";
          } else {
            this.language = "CN";
          }
          let locale = this.$i18n.locale;
          locale === "CN"
            ? (this.$i18n.locale = "EN")
            : (this.$i18n.locale = "CN");
          // console.log("点击了确定");
        });
    },
  },
};
</script>

<style lang="less">
.header {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 1.173333rem;
  z-index: 99;
  .log {
    display: flex;
    align-items: center;
    margin-left: 0.426667rem;
    img {
      width: 3.2rem;
      height: .586667rem;
    }
    .title {
      margin-left: 0.32rem;
      color: #fff;
      // font-family: SanFranciscoDisplay-Bold, SanFranciscoDisplay;
      font-size: 0.4rem;
      font-weight: bold;
    }
    .network {
      display: flex;
      justify-content: center;
      width: 5.333333rem;
      height: 1.066667rem;
      line-height: 1.066667rem;
      text-align: center;
      margin-left: -1.12rem;
      background:rgba(255, 255, 255, .19);
      border-radius: .533333rem;
      font-size: .533333rem;      
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      transform: scale(0.5);   
    }
  }
  .il18 {
    width: 1.146667rem;
    height: 0.533333rem;
    border-radius: 0.266667rem;
    border: 0.013333rem solid #ffffff;
    margin-right: 0.32rem;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 0.293333rem;
      height: 0.276667rem;
    }
    span {
      margin-left: 0.08rem;
      line-height: 0.173333rem;
      font-size: 0.2rem;
      color: #fff;
    }
  }
}
</style>