<template>
  <div class="blockchain">
    <HeaderTwo></HeaderTwo>
    <div class="main">
      <h1>{{$t('message.transac.information')}}</h1>
      <div
        class="content"
        v-if="isDisable"
      >
        <div class="title">{{params.synthesize}}</div>
        <div class="list">
          <van-row>
            <van-col
              span="8"
              class="left"
            >{{$t('message.transac.generated')}}</van-col>
            <van-col
              span="16"
              class="right"
            >{{tranList.create_at}}</van-col>
          </van-row>
          <van-row>
            <van-col
              span="8"
              class="left"
            >{{$t('message.transac.status')}}</van-col>
            <van-col
              span="16"
              class="right center"
            >
              <van-icon
                class="icon"
                name="checked"
              /><span class="success">{{$t('message.transac.success')}}</span>
            </van-col>
          </van-row>
          <van-row v-if="tranList.block_num != 0">
            <van-col
              span="8"
              class="left"
            >{{$t('message.transac.block')}}</van-col>
            <van-col
              span="16"
              class="right"
              @click.stop="onToBlock(tranList.block_num)"
            >
              <span class="block_1 mar_10">{{tranList.block_num}}</span>
            </van-col>
          </van-row>
          <van-row class="from">
            <van-col
              span="8"
              class="left"
            >{{$t('message.transac.from')}}</van-col>
            <van-col
              span="16"
              class="right"
            ><span
                class="block_1"
                @click.stop="onToFromHash(tranList.from_addr)"
              >{{tranList.from_addr}}</span></van-col>
          </van-row>
          <van-row class="from">
            <van-col
              span="8"
              class="left"
            >{{$t('message.transac.to')}}</van-col>
            <van-col
              span="16"
              class="right block_1"
            ><span
                class="block_1"
                @click.stop="onToFromHash(tranList.to_addr)"
              >{{tranList.to_addr}}</span>
            </van-col>
          </van-row>
          <van-row>
            <van-col
              span="8"
              class="left"
            >{{$t('message.transac.amount')}}</van-col>
            <van-col
              span="16"
              class="right"
            >{{tranList.money}} APCT</van-col>
          </van-row>
          <van-row>
            <van-col
              span="8"
              class="left"
            >{{$t('message.transac.transactionFee')}}</van-col>
            <van-col
              span="16"
              class="right"
            >{{tranList.miner_free}} APCT</van-col>
          </van-row>
          <van-row>
            <van-col
              span="8"
              class="left"
            >{{$t('message.transac.confirmNumber')}}</van-col>
            <van-col
              span="16"
              class="right"
            >{{tranList.confirm_num}}</van-col>
          </van-row>
          <van-row>
            <van-col
              span="8"
              class="left"
            >{{$t('message.transac.beforeTheTime')}}</van-col>
            <van-col
              span="16"
              class="right"
            >{{tranList.distance}}</van-col>
          </van-row>
        </div>
      </div>
      <div
        class="contentl"
        v-else
      >
        <van-loading
          type="spinner"
          color="#1989fa"
        />
      </div>

    </div>
    <Footer v-if="isDisable"></Footer>
  </div>
</template>

<script>
import HeaderTwo from "@/components/headerTwo.vue";
import Footer from "@/components/footer.vue";
import { syntheSize } from "@/api/index.js";
export default {
  components: {
    HeaderTwo,
    Footer,
  },
  data() {
    return {
      params: {
        synthesize: "",
      },
      tranList: {},
      isDisable: true,
    };
  },
  created() {
    this.isDisable = false;
    this.params.synthesize = this.$route.query.hash;
    if (this.params.synthesize) {
      this.getSyntheSize();
    }
  },
  watch: {
    "$route.query.hash"(newHash, oldHash) {
      this.params.synthesize = newHash;
      if (newHash !== oldHash) {
        this.isDisable = false;
        this.getSyntheSize();
      }
    },
  },
  methods: {
    async getSyntheSize() {
      const res = await syntheSize(this.params);
      this.tranList = res.data.data.list;
      this.isDisable = true;
    },
    // 跳转
    onToFromHash(hash) {
      this.$router.push({
        path: "/overview",
        query: {
          hash,
        },
      });
    },
    onToBlock(id) {
      this.$router.push({
        path: "/aboutus",
        query: {
          id,
        },
      });
    },
  },
};
</script>

<style lang="less">

.blockchain {
  background: #25398E;
  .main {
    padding: 0 0.4rem;
    margin-top: 1.173333rem;
    margin-bottom: 0.4rem;
    min-height: 10.93rem;
    h1 {
      padding: 0.373333rem 0;
      margin: 0;
      font-size: 0.48rem;
      // font-family: SanFranciscoDisplay-Semibold, SanFranciscoDisplay;
      font-weight: 600;
      color: #ffffff;
    }
    .content {
      width: 9.2rem;
      padding: 0.4rem 0.466667rem 0 0.266667rem;
      box-sizing: border-box;
      background-color: #ffffff;
      border-radius: .186667rem;
      .title {
        margin-bottom: 0.666667rem;
        word-break: break-all;
        font-size: 0.4rem;
        // font-family: SanFranciscoDisplay-Bold, SanFranciscoDisplay;
        font-weight: bold;
        color: #363636;
        line-height: 0.48rem;
      }
      .van-row {
        height: 1.103333rem;
      }
      .list {
        font-size: 0.32rem;
        .van-row {
          line-height: 0.5rem;
        }
        .from {
          height: 1.413333rem;
        }
        .left {
          padding-top: 0.203333rem;
          box-sizing: border-box;
          // font-family: SanFranciscoDisplay-Medium, SanFranciscoDisplay;
          font-weight: 500;
          color: #a0a6b6;
        }
        .right {
          padding-top: 0.203333rem;
          box-sizing: border-box;
          // font-family: SanFranciscoDisplay-Semibold, SanFranciscoDisplay;
          font-weight: 600;
          color: #363636;
          line-height: 0.48rem;
          word-break: break-all;
          .block_1 {
            // font-family: SanFranciscoDisplay-Semibold, SanFranciscoDisplay;
            font-weight: 600;
            color: #4174ff;
          }
          .block_2 {
            // font-family: SanFranciscoDisplay-Medium, SanFranciscoDisplay;
            font-weight: 500;
            color: #a0a6b6;
            line-height: 0.386667rem;
          }
          .mar_10 {
            margin-right: 0.133333rem;
          }
        }
      }
    }
    .center {
      display: flex;
      align-items: center;
      .icon {
        margin-right: .066667rem;
        color:  #27d468;
      }
      .success {
        font-size: 0.32rem;
        color: #27d468;
      }
    }
    .contentl {
      position: relative;
      width: 9.2rem;
      height: 3.333333rem;
      padding: 0.4rem 0.466667rem 0 0.266667rem;
      box-sizing: border-box;
      background-color: #ffffff;
      .van-loading {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -0.4rem;
        margin-top: -0.3rem;
      }
    }
  }
}
</style>