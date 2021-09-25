<template>
	<view class="backup_words">
		<view class="header">
			<view class="header">
				<image @tap="fhui" class="head_img" src="../../static/icon/identity_back@2x.png" mode="widthFix">
				</image>
			</view>
		</view>
		<span class="word1">备份助记词</span>
		<span class="txt1">助记词用于恢复钱包或重置钱包密码，将它准确的抄在纸上，并存放在只有你知道的安全的地方
		</span>
		<view class="mod3">
			<li>
				<image src="../../static/icon/kuang@2x.png" mode="">
					<span class="p1">silly</span>
				</image>				
				<span class="p2">1</span>
			</li>
			<li>
				<image src="../../static/icon/kuang@2x.png" mode="">
					<span class="p1">silly</span>
				</image>				
				<span class="p2">1</span>
			</li>
			<li>
				<image src="../../static/icon/kuang@2x.png" mode="">
					<span class="p1">silly</span>
				</image>				
				<span class="p2">1</span>
			</li>
			<li>
				<image src="../../static/icon/kuang@2x.png" mode="">
					<span class="p1">silly</span>
				</image>				
				<span class="p2">1</span>
			</li>
			<li>
				<image src="../../static/icon/kuang@2x.png" mode="">
					<span class="p1">silly</span>
				</image>				
				<span class="p2">1</span>
			</li>
			<li>
				<image src="../../static/icon/kuang@2x.png" mode="">
					<span class="p1">silly</span>
				</image>				
				<span class="p2">1</span>
			</li>
		</view>
		<view class="info">
			请务必确认已记忆和保存好全部助记词
		</view>
		<view @tap="nex" class="next">下一步</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			nex() {
				uni.navigateTo({
					url: '../confirm_words/index'
				})
			},
			fhui() {
				uni.navigateTo({
					url: '../backup/index'
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		background: #FFFFFF;
	}
	.backup_words {
		width: 100%;
		height: 100%;
		
		.header {
			height: 48upx;
			margin-left: 16upx;
			margin-top: 108upx;
			
			.head_img {
				display: block;
				width: 48upx;
				height: 48upx;
			}
		}
		
		.word1 {
		      z-index: 4;
		      width: 240upx;
		      height: 48upx;
		      display: block;
		      overflow-wrap: break-word;
		      font-size: 48upx;
		      font-family: PingFangSC-Semibold;
		      white-space: nowrap;
		      line-height: 48upx;
		      text-align: left;
		      align-self: flex-start;
		      margin-top: 44upx;
			  margin-left: 32upx;
			  font-weight: 600;
			  color: #221206;
		    }
		
		.txt1 {
		      z-index: 2;
		      width: 686upx;
		      height: 96upx;
		      display: block;
		      overflow-wrap: break-word;
		      color: rgba(158, 158, 158, 1);
		      font-size: 24upx;
		      line-height: 48upx;
		      text-align: left;
		      align-self: flex-start;
		      margin-top: 28upx;
		      overflow: hidden;
		      text-overflow: ellipsis;
			  margin-left: 32upx;
		    }
		
		.mod3 {
			  margin-left: 32upx;
			  margin-top: 52upx;
		      z-index: auto;
		      width: 686upx;
		      height: 428upx;
		      margin-top: 52upx;
		      flex-wrap: wrap;
			  display: flex;
			  justify-content: space-around;
			  flex-wrap: wrap;
			  
			  li {
				  position: relative;
				  width: 206upx;
				  height: 86upx;
				  // background: pink;
				  line-height: 86upx;
				  text-align: center;
				  
				  image {
					  width: 100%;
					  height: 100%;
				  }
				  
				  .p1 {
					  position: absolute;
					  left: 0;
					  top: 0;
					  right: 0;
					  bottom: 0;
					  margin: auto;
				  }
				  
				  .p2 {
					  position: absolute;
					  right: 20upx;
					  bottom: 10upx;
				  }
				  
			  }
		}
		
		.info {
			width: 686upx;
			height: 48upx;
			margin-top: 562upx;
			margin-left: 32upx;
			text-align: center;
			line-height: 48upx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #9E9E9E;
		}
		
		.next {
			margin-left: 32upx;
			margin-top: 28upx;
			width: 686upx;
			height: 88upx;
			background: linear-gradient(90deg, #F9D531 0%, #E4791C 100%);
			border-radius: 44upx;
			text-align: center;
			line-height: 88upx;
			color: #FFFFFF;
		}
	    
	}
</style>
