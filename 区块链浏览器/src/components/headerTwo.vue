<template>
  <div class="headerTow">
    <div class="left">
      <div
        class="log"
        @click="toIndex"
      >
        <img src="../assets/logo.png">
        <!-- <span class="title">APCT BLOCK</span> -->
      </div>
    </div>
    <div class="right">
      <div class="search">
        <input
          type="text"
          class="search_inpt"
          :placeholder="$t('message.search')"
          v-model="searchVal"
          @keyup.enter="searchBar"
        >
        <van-button
          type="info"
          class="search_btn"
          @click="searchBar"
        >
          <img
            src="../assets/sousuo.png"
            class="icon"
          >
        </van-button>
      </div>
    </div>

  </div>
</template>

<script>
import { syntheSize } from "@/api/index.js";
export default {
  data() {
    return {
      searchVal: "",
    };
  },
  methods: {
    async searchBar() {
      // type: 3
      // block: h29098c7bad4d2ce6ef097ebacbfca9ecddea45b09e48ff787a4e310606198f90
      // hbb4e417ba4f310ae7c7b1a8be8b57e3fbde5cb3530501b7e958898c581404469
      // block: 33306
      // type: 2
      // tran: trade_hash : hd0d20830b32951ff657ae405554d38c432653cb3c53ca4b23e0ff3a4c62c21f3
      // type: 1
      // tran: from_addr : h76ab5b36fc5ec280bb9ba20246c1b761c7cb9c56
      // tran: to_addr : h09b0b48d4a3510296909fcc9dbe85c5d970eb5e6
      let synthesize = {
        synthesize: this.searchVal,
      };
      const res = await syntheSize(synthesize);
      if (res.data.data.length == 0) {
        this.searchVal = ''
        this.$toast('未搜索到相关内容哦')
        return
      }
      if (res.data.data.type == 1) {
        this.$router.push({
          path: "/overview",
          query: {
            hash: this.searchVal,
          },
        });
        this.searchVal = ''
      } else if (res.data.data.type == 2) {
        this.$router.push({
          path: "/blockchain",
          query: {
            hash: this.searchVal,
          },
        });
        this.searchVal = ''
      } else if (res.data.data.type == 3) {
        this.$router.push({
          path: "/aboutus",
          query: {
            id: res.data.data.list.id,
          },
        });
        this.searchVal = ''
      }
    },
    toIndex() {
      this.$router.push("/index");
    },
  },
};
</script>

<style lang="less">
.headerTow {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 1.173333rem;
  background: #3E57FF;
  z-index: 99;
  .left {
    flex: 1;
    .log {
      display: flex;
      align-items: center;
      margin-left: 0.426667rem;
      img {
        width: 3.213333rem;
        height: .586667rem;
      }
      .title {
        margin-left: 0.32rem;
        color: #fff;
        // font-family: SanFranciscoDisplay-Bold, SanFranciscoDisplay;
        font-size: 0.4rem;
        font-weight: bold;
      }
    }
  }
  .right {
    // flex: 1;
    margin-right: 0.4rem;
    .search {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 4.173333rem;
      height: 0.826667rem;
      background-color: #fff;
      border-radius: 0.413333rem;
      .search_inpt {
        width: 100%;
        height: 80%;
        margin-left: 0.333333rem;
        border: 0;
        font-size: 0.32rem;
        color: #a0a6b6;
        font-family: SanFranciscoDisplay-Medium, SanFranciscoDisplay;
        font-weight: 500;
      }
      .search_inpt::placeholder {
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #A0A6B6;
      }
      .search_btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 0.906667rem;
        height: 100%;
        border-radius: 0 1.333333rem 1.333333rem 0 ;
        background: linear-gradient(229deg, #63DFFF 0%, #3D56FF 100%);
        .van-button__text {
          text-align: center;
          line-height: 0.266667rem;
        }
        .icon {
          width: 0.373333rem;
          height: 0.373333rem;
        }
      }
    }
  }
}
</style>