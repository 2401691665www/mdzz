<template>
  <div class="footer">
      <div class="log">
        <img :src="logo">
        <!-- <span class="title">APCT BLOCK</span> -->
      </div>
      <div class="gywm">
        <p class="gywm-p1">合作伙伴</p>
        <p class="gywm-p2">中财国富(海南)投资集团有限公司</p>
      </div>
      <div class="jieshao">
        <p class="jieshao-p1">联系方式</p>
        <p class="jieshao-p2">APCThydsj@163.com</p>
      </div>
      <div class="fenxiang">
        <h3 class="footer_h3">分享到</h3>
      </div>
      <div class="footer_list">
        <ul>
          <li
            v-for="item in footerList"
            :key="item"
          ><img :src="item"></li>
        </ul>
      </div>
      <div class="banquan">
        <!-- <span>深圳市华链投资控股发展有限公司</span>
        <span>版权所有：粤ICP18132180号-1</span> -->
      </div>
    </div>

</template>

<script>
export default {
  data() {
    return {
      footerList: [
        require("../assets/footer_list1.png"),
        require("../assets/footer_list2.png"),
        require("../assets/footer_list3.png"),
        require("../assets/footer_list4.png"),
        require("../assets/footer_list5.png"),
        require("../assets/footer_list6.png"),
        require("../assets/footer_list7.png"),
      ],
      logo: require("../assets/logo.png"),
    };
  },
  methods: {},
};
</script>

<style lang="less">
.futer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #15256C;
  .log {
    display: flex;
    align-items: center;
    margin-top: 0.84rem;

    img {
      display: block;
      width: 3.2rem;
      height: 0.586667rem;
    }
    .title {
      margin-left: 0.306667rem;
      font-size: 0.48rem;
      // font-family: SanFranciscoDisplay-Bold, SanFranciscoDisplay;
      font-weight: bold;
      color: #ffffff;
    }
  }
  .fenxiang {
    margin-top: .533333rem;
    .footer_h3 {
      font-size: 0.32rem;
      color: #ffffff;
      margin-bottom: .53333rem;
    }
  }

  .footer_list {
    // margin-top: 0.453333rem;
    ul {
      display: flex;
      li {
        width: 0.533333rem;
        height: 0.533333rem;
        margin-right: 0.56rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      li:last-child {
        margin-right: 0;
      }
    }
  }
  .gywm {
    margin-top: .533333rem;
    font-size: .32rem;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    .gywm-p1 {
      margin: 0 0 .213333rem 0;
    }
    .gywm-p2 {
      margin: 0;
      color: #A0A6B6;
    }
  }
  .jieshao {
    margin-top: .533333rem;
    font-size: 0.32rem;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    .jieshao-p1 {
      margin: 0 0 .213333rem 0;
    }
    .jieshao-p2 {
      margin: 0;
      color: #A0A6B6;
    }
  }
  .banquan {
    display: flex;
    // justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0.653333rem 0 0.64rem 0;
    font-size: 0.186667rem;
    // font-family: AppleColorEmoji;
    color: #7b808d;
    span {
      display: inline-block;
      margin-top: 0.066667rem;
    }
  }
}
</style>