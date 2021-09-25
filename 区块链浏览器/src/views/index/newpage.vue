<template>
    <div class="newpage">
        <ul>
            <li v-for = "(item) in list" :key="item.id">
                <p>
                    <img :src="item.img" alt="">
                </p>
                <div class="word">
                    <span class="word1">{{item.word1}}</span>
                    <span class="word2">{{item.word2}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>


<script>
export default ({
   data () {
       return {
           list: [
               {   
                   id: 1,
                   img: require('../../assets/BLOCK-HEIGHT.png'),
                   word1: 'BLOCK HEIGHT',
                   word2: '39,574'
               },
               {   
                   id: 2,
                   img: require('../../assets/BLOCK-HEIGHT.png'),
                   word1: 'BLOCK TIME',
                   word2: '13.33 s'
               },
               {   
                   id: 3,
                   img: require('../../assets/BLOCK-HEIGHT.png'),
                   word1: 'LATEST PRICE',
                   word2: '63.29'
               }
           ]
       }
   }
})
</script>


<style lang="less">
.newpage {
    ul {
       width: 9.72rem;
       min-height: 2.213333rem;
       margin: .48rem .12rem .6rem .12rem ;
       overflow: hidden;
       li {
           width: 4.48rem;
           height: 1.76rem;
           float: left;
           margin-top: .226667rem;
           margin-left: .253333rem;
           background: #ffff;
           border-radius: .186667rem;
           p {
               width: .64rem;
               height: 100%;
               margin-left: .306667rem;
               margin-top: 0;
               float: left;
               img {
                   display: block;
                   width: .64rem;
                   height: .64rem;
                   margin-top: .626667rem;
               }
           }
           .word {
               width: 3.293rem;
               height: 100%;
               margin-left: .24rem;
               margin-top: 0;
               float: left;
               overflow: hidden;
               position: relative;
               .word1 {
                   width: 100%;
                   height: .44rem;
                   font-size: .32rem;
                   color: #A0A6B6;
                   line-height: .44rem;
                   font-family: PingFangSC-Semibold, PingFang SC;
                   font-weight: 600;
                   position: absolute;
                   left: 0;
                   top: .44rem;
               }
               .word2 {
                   width: 100%;
                   height: .48rem;
                   font-size: .48rem;
                   font-family: PingFangSC-Semibold, PingFang SC;
                   font-weight: 600;
                   color: #363636;
                   line-height: .48rem;
                   position: absolute;
                   left: 0;
                   top: 0.91rem;
               }
           }           
       }
    }
}
</style>
