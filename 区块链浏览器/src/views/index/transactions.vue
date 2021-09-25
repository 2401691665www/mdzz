<template>
  <div class="transactions">
    <div class="title">
      <div class="left">
        <img src="../../assets/statistic.png">
        <span>{{$t('message.transac.information')}}</span>
      </div>
      <img
        class="right"
        src="../../assets/shuaxin.png"
        @click.prevent="onRefresh"
      >
    </div>
    <div
      class="main"
      v-if="tranList.length != 0"
    >
      <div
        class="item"
        v-for="(item,index) in tranList"
        :key="index"
      >
        <div class="top" @click.stop="onTranHash(item.trade_hash)">
          <span class="sp1">{{$t('message.token.TX')}}</span>
          <span class="sp2">{{item.trade_hash}}</span>
        </div>
        <div class="center">
          <div class="left" @click.stop="onToFromHash(item.from_addr)">
            <span class="span1">{{$t('message.token.From')}}</span>
            <span class="span2">{{item.from_addr}}</span>
          </div>
          <div class="right" @click.stop="onToFromHash(item.to_addr)">
            <span class="span1">{{$t('message.token.To')}}</span>
            <span class="span2">{{item.to_addr}}</span>
          </div>
        </div>
        <div class="bottom">
          <span class="sp1">{{item.money}} APCT</span>
          <span class="sp2">{{item.distance}}</span>
        </div>
      </div>
    </div>
    <div
      class="main"
      v-if="tranList.length == 0"
    >
      <div class="error" v-if="!isDisable">
        暂无数据...
      </div>
      <div class="error" v-else></div>
    </div>
    <van-loading
      type="spinner"
      color="#1989fa"
      v-if="isDisable"
    />
  </div>
</template>

<script>
import { blockTran } from "@/api/index.js";
export default {
  data() {
    return {
      tranList: [],
      isDisable: false,
    };
  },
  created() {
    this.getBlockTran();
  },
  methods: {
    async getBlockTran() {
      const res = await blockTran();
      if (res.data.code == 1) {
        this.tranList = res.data.data.tran;
      }
      this.isDisable = false; //响应后延迟几秒回复正常；
    },
    // 刷新数据
    onRefresh() {
      this.tranList = [];
      if (!this.isDisable) {
        this.isDisable = true;
        setTimeout(() => {
          this.getBlockTran();
        }, 1000);
      }
    },
    // 查看详情
    onTranHash(hash) {
      this.$router.push({
        path: "/blockchain",
        query: {
          hash
        },
      });
    },
    onToFromHash(hash) {
      this.$router.push({
        path: "/overview",
        query: {
          hash
        },
      });
    }
  },
};
</script>

<style lang="less">
.transactions {
  position: relative;
  margin-top: 0.6rem;
  padding: 0 0.4rem;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      img {
        width: 0.466667rem;
        height: 0.44rem;
        margin-right: 0.306667rem;
      }
      span {
        font-size: 0.48rem;
        font-family: SanFranciscoDisplay-Semibold, SanFranciscoDisplay;
        font-weight: 600;
        color: #ffffff;
      }
    }
    .right {
      width: 0.426667rem;
      height: 0.373333rem;
    }
  }
  .main {
    padding: 0 0.293333rem;
    margin: 0.373333rem 0 0.6rem 0;
    background-color: #ffffff;
    border-radius: .186667rem;
    .item {
      width: 100%;
      height: 1.533333rem;
      padding: 0.263333rem 0 0.226667rem 0;
      border-bottom: 0.013333rem solid #e1e5ef;
      font-weight: 500  ;
      .top {
        display: flex;
        font-size: 0.32rem;
        margin-bottom: 0.106667rem;
        .sp1 {
          margin-right: 0.146667rem;
          color: #363636;
        }
        .sp2 {
          display: inline-block;
          width: 7.5rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #4b8bff;
        }
      }
      .center {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.186667rem;
        font-size: 0.32rem;
        // font-weight: 500;
        .left {
          display: flex;
          margin-bottom: 0.066667rem;
          .span1 {
            margin-right: 0.146667rem;
            color: #363636;
          }
          .span2 {
            display: inline-block;
            width: 3.36rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #4b8bff;
          }
        }
        .right {
          display: flex;
          .span2 {
            display: inline-block;
            width: 3.36rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #4b8bff;
          }
          .span1 {
            color: #363636;
            margin-right: 0.146667rem;
          }
        }
      }
      .bottom {
        font-size: 0.266667rem;
        .sp2 {
          color: #a0a6b6;
        }
        .sp1 {
          color: #4b8bff;
          margin-right: 0.146667rem;
        }
      }
    }
    .item:last-child {
      border: 0;
    }
    .error {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3.333333rem;
      font-size: 0.373333rem;
      color: #a0a6b6;
    }
  }
  .van-loading {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -0.4rem;
    // margin-top: -0.2rem;
  }
}
</style>