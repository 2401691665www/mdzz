<template>
  <div class="blocks">
    <div class="title">
      <div class="left">
        <img src="../../assets/qukuaigaoduxuanzhong.png">
        <span>{{$t('message.block')}}</span>
      </div>
      <img
        class="right"
        src="../../assets/shuaxin.png"
        @click="onRefresh"
      >
    </div>
    <div
      class="main"
      v-if="blockList.length != 0"
    >
      <div
        class="item"
        v-for="(item,index) in blockList"
        :key="index"
      >
        <div class="left">
          {{item.id}}
        </div>
        <div class="right">
          <div class="top">
            <span class="span1">{{$t('message.blocks.by')}}</span>
            <span
              class="span2"
              @click.stop="toBlockHash(item.id)"
            >{{item.block_hash.slice(0,16)}}...{{item.block_hash.substring(item.block_hash.length - 16,item.block_hash.length)}}</span>
          </div>
          <div class="bottom">
            <span
              class="span1"
              v-if="item.tran_count != 0"
            >{{item.tran_count}} {{$t('message.blocks.txns')}}</span>
            <span class="span2">{{item.distance}}</span>
          </div>
        </div>
      </div>
    </div>
    <div
      class="main"
      v-if="blockList.length == 0"
    >
      <div
        class="error"
        v-if="!isDisable"
      >
        暂无数据...
      </div>
      <div
        class="error"
        v-else
      >
        <van-loading
          type="spinner"
          color="#1989fa"
          v-if="isDisable"
        />
      </div>
    </div>

  </div>
</template>

<script>
import { blockTran } from "@/api/index.js";
export default {
  data() {
    return {
      blockList: [],
      isDisable: false,
    };
  },
  created() {
    this.getBlockTran();
  },
  methods: {
    // 刷新数据
    onRefresh() {
      this.blockList = [];
      if (!this.isDisable) {
        this.isDisable = true;
        setTimeout(() => {
          this.getBlockTran();
        }, 1000);
      }
    },
    async getBlockTran() {
      const res = await blockTran();
      if (res.data.code == 1) {
        this.blockList = res.data.data.block;
      }
      this.isDisable = false; //响应后延迟几秒回复正常；
    },
    // 详情查询
    toBlockHash(id) {
      this.$router.push({
        path: "/aboutus",
        query: {
          id
        },
      });
    },
  },
};
</script>

<style lang="less">
.blocks {
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
      display: flex;
      align-items: center;
      // justify-content: space-between;
      width: 100%;
      height: 1.533333rem;
      border-bottom: 0.013333rem solid #e1e5ef;
      .left {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1.493333rem;
        height: 0.706667rem;
        background: linear-gradient(270deg, #1b58ff 0%, #5683ff 100%);
        border-radius: 0.04rem;
        font-size: 0.373333rem;
        color: #ffffff;
      }
      .right {
        margin-left: 0.28rem;
        font-size: 0.32rem;
        font-weight: 500;
        .top {
          margin-bottom: 0.066667rem;
          .span1 {
            margin-right: 0.146667rem;
            color: #363636;
          }
          .span2 {
            word-break: break-all;
            color: #4b8bff;
          }
        }
        .bottom {
          font-size: 0.266667rem;
          .span2 {
            color: #a0a6b6;
          }
          .span1 {
            color: #4b8bff;
            margin-right: 0.146667rem;
          }
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
    margin-top: -0.4rem;
  }
}
</style>