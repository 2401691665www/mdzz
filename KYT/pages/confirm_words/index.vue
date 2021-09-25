<template>
	<view class="confirm_words">
		<view class="header">
			<view class="header">
				<image @tap="fh" class="head_img" src="../../static/icon/identity_back@2x.png" mode="widthFix">
				</image>
			</view>
		</view>
		<span class="info1">确认助记词</span>
		<span class="txt2">请按顺序准确点击助记词，以确认您正确备份</span>
		<view class="mod3">
			<li>
				<image src="../../static/icon/kuang@2x.png" mode="">
				</image>				
				<span class="p2">1</span>
			</li>
			<li>
				<image src="../../static/icon/kuang@2x.png" mode="">
				</image>				
				<span class="p2">1</span>
			</li>
			<li>
				<image src="../../static/icon/kuang@2x.png" mode="">
				</image>				
				<span class="p2">1</span>
			</li>
		</view>
		<view class="mod2">
			<li>
				include
			</li>
			<li>
				include
			</li>
			<li>
				include
			</li>
			<li>
				include
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
		methods: {
			fh() {
				uni.navigateTo({
					url: '../backup_words/index'
				})
			},
			nex() {
				uni.switchTab({
					url: '../../components/home/index'
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
	.confirm_words {
		overflow: hidden;
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
		
		.info1 {
		      z-index: 3;
		      width: 240upx;
		      height: 48upx;
		      display: block;
		      overflow-wrap: break-word;
		      color: rgba(34, 18, 6, 1);
		      font-size: 48upx;
		      font-family: PingFangSC-Semibold;
		      white-space: nowrap;
		      line-height: 48upx;
		      text-align: left;
		      align-self: flex-start;
		      margin-top: 44upx;
			  margin-left: 32upx;
		}
		
		.txt2 {
		      z-index: 2;
		      width: 686upx;
		      height: 48upx;
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
			  // background: skyblue;
			  margin-left: 32upx;
			  margin-top: 52upx;
		      z-index: auto;
		      width: 686upx;
		      height: 428upx;
		      margin-top: 52upx;
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
				  
				  .p2 {
					  position: absolute;
					  right: 20upx;
					  bottom: 10upx;
				  }
				  
			  }
		}
		
		.mod2 {
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
			width: 686upx;
			height: 274upx;
			margin-top: 42upx;
			// background: pink;
			margin-left: 32upx;
			
			li {
				width: 152upx;
				height: 72upx;
				background: #FFF8EA;
				text-align: center;
				line-height: 72upx;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: #221206;
			}
		}
		
		.info {
			width: 686upx;
			height: 48upx;
			margin-top: 302upx;
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
