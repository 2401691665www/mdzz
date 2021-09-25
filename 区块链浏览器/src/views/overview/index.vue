<template>
  <div class="overview">
    <HeaderTwo></HeaderTwo>
    <div class="main">
      <div class="over_ETH">
        <h2>{{$t('message.overview.overview')}}</h2>
        <div class="contnet">
          <p class="title">{{$t('message.overview.balance')}}</p>
          <h3 class="ETH_num">{{balance+' APCT'}}</h3>
        </div>
      </div>
      <div class="total_list">
        <div class="title_search">
          <h1>{{$t('message.overview.total')}} {{count}} {{$t('message.overview.transactions')}}</h1>
          <!-- <div class="searchVal">
            <img
              class="icon"
              src="../../assets/sousuo2.png"
            />
            <input
              type="text"
              placeholder="Search"
            >
          </div> -->
        </div>
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div
            class="content"
            v-for="(item,index) in tranList"
            :key="index"
          >
            <div class="list">
              <van-row>
                <van-col
                  span="8"
                  class="left"
                >{{$t('message.overview.parentHash')}}</van-col>
                <van-col
                  span="16"
                  class="right"
                ><span
                    class="block_1"
                    @click.stop="onTranHash(item.trade_hash)"
                  >{{item.trade_hash}}</span></van-col>
              </van-row>
              <van-row v-if="item.block_num !== 0">
                <van-col
                  span="8"
                  class="left"
                >{{$t('message.overview.block')}}</van-col>
                <van-col
                  span="16"
                  class="right"
                  @click.stop="onToBlock(item.block_num)"
                >
                  <span class="block_1">{{item.block_num}}</span>
                  <!-- <span class="block_2">(37999 block confirmations)</span> -->
                </van-col>
              </van-row>
              <van-row>
                <van-col
                  span="8"
                  class="left"
                >{{$t('message.overview.from')}}</van-col>
                <van-col
                  span="16"
                  class="right"
                ><span
                    class="block_1"
                    @click.stop="onToFromHash(item.from_addr)"
                  >{{item.from_addr}}</span></van-col>
              </van-row>
              <van-row>
                <van-col
                  span="8"
                  class="left"
                >{{$t('message.overview.to')}}</van-col>
                <van-col
                  span="16"
                  class="right"
                ><span
                    class="block_1"
                    @click.stop="onToFromHash(item.to_addr)"
                  >{{item.to_addr}}</span></van-col>
              </van-row>
              <van-row>
                <van-col
                  span="8"
                  class="left"
                >{{$t('message.overview.APCT')}}</van-col>
                <van-col
                  span="16"
                  class="right"
                ><span class="">{{item.money}}</span></van-col>
              </van-row>
              <van-row>
                <van-col
                  span="8"
                  class="left"
                >{{$t('message.overview.ago')}}</van-col>
                <van-col
                  span="16"
                  class="right"
                ><span class="">{{item.distance}}</span></van-col>
              </van-row>
            </div>
          </div>
        </van-list>
      </div>
    </div>
    <Footer v-if="!loading"></Footer>
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
        synthesize: this.$route.query.hash,
        size: 1,
        page: 10,
      },
      searchVal: "",
      tranList: [],
      balance: "",
      count: "",
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  watch: {
    "$route.query.hash"(newHash, oldHash) {
      this.params.synthesize = newHash;
      if (newHash !== oldHash) {
        this.tranList = [];
        this.finished = false;
        this.onLoad();
      }
    },
  },
  methods: {
    // 滚到底部时触发
    onLoad() {
      this.getSyntheSize();
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    async getSyntheSize() {
      const res = await syntheSize(this.params);
      console.log(res)
      if (this.tranList.length < res.data.data.count) {
        this.tranList.push(...res.data.data.list);
      } else {
        this.tranList = res.data.data.list;
      }
      // 将加载状态设置为false
      this.loading = false;
      this.balance = res.data.data.total;
      this.count = res.data.data.count;
      // 判断数据是否加载完毕
      if (this.tranList.length >= res.data.data.count) {
        this.finished = true;
      }
    },
    // 路由跳转
    onTranHash(hash) {
      this.$router.push({
        path: "/blockchain",
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
    onToFromHash(hash) {
      if (hash === this.$route.query.hash)
        return this.$toast("已是当前页面了哦");
      this.$router.push({
        path: "/overview",
        query: {
          hash,
        },
      });
    },
  },
};
</script>

<style lang="less">
.overview {
  background: #25398E;
  .main {
    padding: 0 0.4rem;
    margin-top: 1.173333rem;
    margin-bottom: 0.4rem;
    .over_ETH {
      h2 {
        padding: 0.373333rem 0;
        margin: 0;
        font-size: 0.48rem;
        // font-family: SanFranciscoDisplay-Semibold, SanFranciscoDisplay;
        font-weight: 600;
        color: #ffffff;
      }
      .contnet {
        padding: 0.44rem 0.28rem;
        box-sizing: border-box;
        height: 2.386667rem;
        background-color: #ffffff;
        border-radius: .186667rem;
        .title {
          margin: 0.133333rem 0 0.373333rem 0;
          font-size: .32rem;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #A0A6B6;
        }
        .ETH_num {
          margin: 0;
          font-size: 0.64rem;
          // font-family: SanFranciscoDisplay-Semibold, SanFranciscoDisplay;
          font-weight: 600;
          color:#363636;
          line-height: 0.773333rem;
        }
      }
    }
    .total_list {
      .title_search {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h1 {
          margin: 0.373333rem 0;
          font-size: 0.48rem;
          // font-family: SanFranciscoDisplay-Semibold, SanFranciscoDisplay;
          font-weight: 600;
          color: #ffffff;
        }
        .searchVal {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3.186667rem;
          height: 0.666667rem;
          background: #ffffff;
          font-size: 0.32rem;
          // font-family: SanFranciscoDisplay-Medium, SanFranciscoDisplay;
          font-weight: 500;
          color: #a0a6b6;
          border-radius: 0.333333rem;
          border: 0.013333rem solid #e1e5ef;
          .icon {
            width: 0.24rem;
            height: 0.24rem;
            color: #e1e5ef;
            margin-right: 0.133333rem;
          }
          input {
            width: 2.2rem;
            border: 0;
            font-size: 0.32rem;
            // font-family: SanFranciscoDisplay-Medium, SanFranciscoDisplay;
            font-weight: 500;
            color: #a0a6b6;
          }
        }
      }

      .content {
        width: 9.2rem;
        padding: 0.4rem 0.466667rem 0.4rem 0.266667rem;
        margin-bottom: 0.266667rem;
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
        // .van-row {
        //   height: 1.103333rem;
        // }
        .list {
          font-size: 0.32rem;
          .van-row {
            line-height: 0.5rem;
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
    }
  }
}
</style>