<template>
  <div class="indexs">
    <section>
     <Header></Header>
     <div class="banner">
      <h2>Blockchain Browser</h2>
     </div>
     <div class="main">
      <div class="search">
        <input
          class="search_inpt"
          type="text"
          :placeholder="$t('message.search')"
          v-model="searchVal"
          @keyup.enter="searchBar"
        >
        <van-button
          type="info"
          class="search_btn"
          @click="searchBar"
        >{{$t('message.search')}}
        </van-button>
      </div>
      <div
        class="block_list"
        v-if="blockList.length != 0"
      >
        <!-- <ul>
          <li>
            <div class="left">
              <img src="../../assets/index_list1.png">
            </div>
            <div class="right">
              <p class="p1">{{$t('message.blockID')}}</p>
              <p class="p2">{{take_id}}</p>
            </div>
          </li>
          <li>
            <div class="left">
              <img src="../../assets/index_list2.png">
            </div>
            <div class="right">
              <p class="p1">{{$t('message.blockTime')}}</p>
              <p class="p2">{{take_time}} secs</p>
            </div>
          </li>
        </ul> -->
      </div>
     </div>
    </section>
    <nav>
     <Newpage></Newpage>
     <Blocks ref="blocks"></Blocks>
     <Transactions ref="transactions"></Transactions>
     <Footer></Footer>
    </nav>
  </div>
</template>

<script>
import Newpage from "./newpage.vue"
import Header from "@/components/header";
import Footer from "@/components/footer.vue";
import Blocks from "./blocks";
import Transactions from "./transactions";
import { blockTran, syntheSize } from "@/api/index.js";
export default {
  components: {
    Header,
    Blocks,
    Transactions,
    Footer,
    Newpage
  },
  data() {
    return {
      blockList: [],
      tranList: [],
      searchVal: "",
      take_time: "",
      take_id: "",
    };
  },
  created() {
    this.getBlockTran();
  },
  methods: {
    async getBlockTran() {
      const res = await blockTran();
      if (res.data.code == 1) {
        this.blockList = res.data.data.block;
        this.take_time = res.data.data.block[0].take_time;
        let _id = res.data.data.block[0].id.toString();
        this.take_id = _id.replace(/(.{2})/, "$1,");
      }
    },
    // 搜索
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
      this.searchVal = "";
      if (res.data.data.length == 0) {
        this.$toast("未搜索到相关内容哦");
        return;
      }
      if (res.data.data.type == 1) {
        this.$router.push({
          path: "/overview",
          query: {
            hash: this.searchVal,
          },
        });
      } else if (res.data.data.type == 2) {
        this.$router.push({
          path: "/blockchain",
          query: {
            hash: this.searchVal,
          },
        });
      } else if (res.data.data.type == 3) {
        this.$router.push({
          path: "/aboutus",
          query: {
            id: res.data.data.list.id,
          },
        });
      }
      console.log(res);
    },
  },
};
</script>

<style lang="less">
html {
  background: #25398E;
}
section {
  width: 100%;
  height: 5.466667rem;
  position: fixed;
  top: 0;
  z-index: 100;
  background: #25398E;
}
nav {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  // height: 4.986667rem;
}
.indexs {
  width: 100%;
  padding-top: 5.466667rem;
  background: #25398E;
  .banner {
    background-image: url("../../assets/bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 10rem;
    height: 4.986667rem;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
      font-size: 0.64rem;
      font-weight: 800;
      color: #fff;
      font-family: SanFranciscoDisplay-Heavy, SanFranciscoDisplay;
    }
  }
  .main {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    .search {
      position: absolute;
      left: 50%;
      margin-left: -4.6rem;
      top: -0.48rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.16rem;
      box-sizing: border-box;
      width: 9.2rem;
      height: .96rem;
      background-color: #fff;
      border-radius: 0.48rem;
      .search_inpt {
        width: 100%;
        height: 0.533333rem;
        margin-left: 0.266667rem;
        background-color: transparent;
        border: 0;
        font-size:.32rem;
        font-family: SanFranciscoDisplay-Medium, SanFranciscoDisplay;
        font-weight: 500;
        color: #a0a6b6;
        line-height: 0.386667rem;
      }
      .search_inpt::placeholder {
        color: #AAA0B6;
      }
      .search_btn {
        width: 1.786667rem;
        height: .72rem;
        line-height: .72rem;
        border-radius: 0.36rem;
        background: linear-gradient(270deg, #1b58ff 0%, #5683ff 100%);
        font-family: SanFranciscoDisplay-Heavy, SanFranciscoDisplay;
        font-weight: 800;
        color: #ffffff;
        border: 0;
        font-size: .373333rem;
      }
    }
    .block_list {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 0.373333rem;
      margin-top: 1rem;
      box-sizing: border-box;
      ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 9.2rem;
        li {
          flex: 1;
          display: flex;
          align-items: center;
          // width: 4.48rem;
          height: 1.76rem;
          margin-top: 0.226667rem;
          background-color: #ffffff;
          .left {
            margin-left: 0.333333rem;
            height: 100%;
            line-height: 1.95rem;
            img {
              width: 0.64rem;
              height: 0.64rem;
            }
          }
          .right {
            margin-left: 0.2rem;
            .p1 {
              margin: 0;
              font-size: 0.32rem;
              font-family: SanFranciscoDisplay-Medium, SanFranciscoDisplay;
              font-weight: 500;
              color: #a0a6b6;
            }
            .p2 {
              margin: 0.186667rem 0 0 0;
              font-size: 0.48rem;
              font-family: SanFranciscoDisplay-Bold, SanFranciscoDisplay;
              font-weight: bold;
              color: #363636;
            }
          }
        }
        li:first-child {
          margin-right: 0.214333rem;
        }
      }
    }
  }
}
</style>
