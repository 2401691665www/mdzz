<template>
  <div class="aboutus">
    <HeaderTwo></HeaderTwo>
    <div class="main">
      <h1>{{$t('message.blocks.information')}}</h1>
      <div class="content">
        <div class="prev_next">
          <div class="left">{{blockList.id}}</div>
          <div class="right">
            <van-button
              class="prev"
              type="default"
              @click.stop="onPrev"
              :disabled="disabled1 == 1"
            >&lt;{{$t('message.blocks.prev')}}</van-button>
            <van-button
              class="next"
              type="default"
              @click.stop="onNext"
              :disabled="disabled2 == 1"
            >{{$t('message.blocks.next')}}&gt;</van-button>
          </div>
        </div>
        <div class="small_title">{{blockList.block_hash}}</div>
        <div class="list">
          <div class="title">
            {{$t('message.blocks.generated')}}
          </div>
          <div class="desc">
            <span>{{blockList.create_at}}</span>
          </div>
        </div>
        <div class="list">
          <div class="title">
            {{$t('message.blocks.blockhash')}}
          </div>
          <div class="desc">
            <span class="black">{{blockList.block_hash}}</span>
          </div>
        </div>
        <div class="list">
          <div class="title">
            {{$t('message.blocks.transaction')}}
          </div>
          <div class="desc">
            <span class="black">{{blockList.tran_count}}</span>
          </div>
        </div>
        <div class="list">
          <div class="title">
            {{$t('message.blocks.takeTime')}}
          </div>
          <div class="desc">
            <span class="black">{{blockList.take_time}}</span>
          </div>
        </div>
        <div class="list">
          <div class="title">
            {{$t('message.blocks.transactionFee')}}
          </div>
          <div class="desc">
            <span class="black">{{blockList.miner_free}} APCT</span>
          </div>
        </div>
        <div class="list">
          <div class="title">
            {{$t('message.blocks.beforeTheTime')}}
          </div>
          <div class="desc">
            <span class="black">{{blockList.distance}}</span>
          </div>
        </div>
        <van-loading
          type="spinner"
          color="#1989fa"
          v-if="isDisable"
        />
      </div>
    </div>
    <Footer></Footer>
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
        page: 1,
        size: 10,
        id: "",
      },
      isID: "",
      blockList: {},
      disabled1: "",
      disabled2: "",
      isDisable: false,
    };
  },
  created() {
    this.params.id = this.$route.query.id;
    if (this.params.id) {
      this.getSyntheSize();
    }
  },
  methods: {
    // 获取详情信息
    // async getAddressQuery() {
    //   const data = {
    //     page: this.params.page,
    //     size: this.params.size,
    //     address: this.params.address,
    //   };
    //   const res = await addressQuery(data);
    //   console.log(res);
    // },
    // 综合查询
    getSyntheSize() {
      const _data = new FormData();
      _data.append('synthesize',this.params.id)
      syntheSize(_data).then((res) => {
        console.log(res);
        if (!res.data.data || !res.data.data.list) {
          this.$toast("未搜索到相关消息");
          if (this.params.id < this.isID) {
            this.params.id = this.isID;
            this.disabled1 = 1;
          }
          if (this.params.id > this.isID) {
            this.params.id = this.isID;
            this.disabled2 = 1;
          }
          this.isDisable = false;
          return;
        }
        this.blockList = res.data.data.list;
        this.isID = res.data.data.list.id;
        this.disabled1 = 0;
        this.disabled2 = 0;
        this.isDisable = false;
      });
    },
    // 上一个
    onPrev() {
      this.isDisable = true;
      this.params.id--;
      this.getSyntheSize();
    },
    // 下一个
    onNext() {
      this.isDisable = true;
      this.params.id++;
      this.getSyntheSize();
    },
  },
};
</script>

<style lang="less">
html {
  background: #15256C;
  z-index: 102;
}
.aboutus {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: #25398E;
  .main {
    background: #25398E;
    padding: 0 0.4rem;
    margin-top: 1.173333rem;
    min-height: 10.93rem;
    // margin-bottom: 3.306667rem;
    h1 {
      padding: 0.373333rem 0;
      margin: 0;
      font-size: 0.48rem;
      font-family: SanFranciscoDisplay-Semibold, SanFranciscoDisplay;
      font-weight: 600;
      color: #ffffff;
    }
    .content {
      height: 8.853333rem;
      .prev_next {
        display: flex;
        align-items: center;
        margin: 0.133333rem 0 0.226667rem 0;
        .left {
          min-width: 1.893333rem;
          height: .893333rem;
          margin-right: 0.52rem;
          font-size: 0.64rem;
          font-family: SanFranciscoDisplay-Semibold, SanFranciscoDisplay;
          font-weight: 600;
          color: #363636;
        }
        .right {
          display: flex;
          justify-content: center;
          align-items: center;
          .van-button--default {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 1.653333rem;
            height: 0.64rem;
            border: 0.026667rem solid #e1e5ef;
            font-size: .346667rem;
            // font-family: SanFranciscoDisplay-Medium, SanFranciscoDisplay;
            font-weight: 500;
            color: #3E57FF;
          }
          // .prev {
          //   width: 1.653333rem;
          //   height: 0.64rem;
          //   padding: 0;
          //   border: 0;
          //   background-color: transparent;
          // }
          // .next {
          //   width: 1.653333rem;
          //   height: 0.64rem;
          //   padding: 0;
          //   border: 0;
          //   background-color: transparent;
          // }
          .van-button--default:last-child {
            margin-left: -0.026667rem;
          }
          .van-button__text {
            display: inline-block;
            width: 1.333333rem;
          }
        }
      }
      width: 9.2rem;
      padding: 0.4rem 0.466667rem 0.4rem 0.266667rem;
      box-sizing: border-box;
      background-color: #ffffff;
      border-radius: .186667rem;
      .small_title {
        margin-bottom: 0.666667rem;
        word-break: break-all;
        font-size: 0.4rem;
        // font-family: SanFranciscoDisplay-Bold, SanFranciscoDisplay;
        font-weight: bold;
        color: #363636;
        line-height: 0.48rem;
      }
      .list {
        display: flex;
        align-items: center;
        margin-bottom: 0.333333rem;
        .title {
          flex: 1.3;
          margin-right: 0.133333rem;
          font-size: 0.32rem;
          // font-family: SanFranciscoDisplay-Medium, SanFranciscoDisplay;
          font-weight: 500;
          color: #a0a6b6;
        }
        .desc {
          flex: 3;
          font-size: 0.32rem;
          word-break: break-all;
          // font-family: SanFranciscoDisplay-Semibold, SanFranciscoDisplay;
          font-weight: 600;
          color: #363636;
          line-height: 0.48rem;
          .blue {
            color: #4174ff;
          }
          .black {
            color: #363636;
          }
        }
      }
    }
  }
  .van-loading {
    position: absolute;
    top: 20%;
    left: 71%;
    margin-left: -0.4rem;
    margin-top: -0.5rem;
  }
  .van-loading__spinner {
    width: 0.533333rem;
    height: 0.533333rem;
  }
}
</style>