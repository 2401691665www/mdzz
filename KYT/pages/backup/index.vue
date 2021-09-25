<template>
	<view class="backup">
		<view class="header">
			<image @tap="hui" class="head_img" src="../../static/icon/identity_back@2x.png" mode="widthFix">
			</image>
		</view>
		<view class="banner">
			<image class="icon_beifen" src="../../static/icon/icon_beifen@2x.png" mode="widthFix">				
			</image>
		</view>
		<span class="txt3">使用笔和纸正确抄写助记词</span>
		<span class="word2">如果你的手机丢失、被盗、损坏，助记词将可恢复您的资产</span>
		<span class="txt4">妥善保管至隔离网络的安全地方</span>
		<span class="txt5">请勿将助记词在网络环境下，分享和储存</span>
		<view @tap="nex" class="next">下一步</view>
	</view>
</template>

<script>
	export default {
		methods: {
			nex() {
				uni.navigateTo({
					url: '../backup_words/index'
				})
			},
			hui() {
				uni.navigateTo({
					url: '../identity/index'
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
	
	.backup {
		width: 100%;
		height: 100%;
		overflow: hidden;
		
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
		
		.banner {
			width: 100%;
			height: 356upx;
			margin-top: 38upx;
			
			.icon_beifen {
				display: block;
				width: 356upx;
				height: 356upx;
				margin-left: 198upx;
			}
		}
		
		.txt3 {
		      z-index: 39;
		      width: 384upx;
		      height: 48upx;
		      display: block;
		      overflow-wrap: break-word;
		      font-size: 32upx;
		      font-family: PingFangSC-Semibold;
		      white-space: nowrap;
		      line-height: 48upx;
		      text-align: left;
		      align-self: flex-start;
		      margin-top: 76upx;
			  margin-left: 32upx;
			  font-weight: 600;
			  color: #221206;
		}
		.word2 {
		      z-index: 37;
		      width: 686upx;
		      height: 96uupx;
		      display: block;
		      overflow-wrap: break-word;
		      color: rgba(158, 158, 158, 1);
		      font-size: 28upx;
		      line-height: 48upx;
		      text-align: left;
		      align-self: flex-start;
		      margin-top: 20upx;
		      overflow: hidden;
		      text-overflow: ellipsis;
			  margin-left: 32upx;
		}
		.txt4 {
		      z-index: 40;
		      width: 448upx;
		      height: 48upx;
		      display: block;
		      overflow-wrap: break-word;
		      font-size: 32upx;
		      font-family: PingFangSC-Semibold;
		      white-space: nowrap;
		      line-height: 48upx;
		      text-align: left;
		      align-self: flex-start;
		      margin-top: 48upx;
			  margin-left: 32upx;
			  font-weight: 600;
			  color: #221206;
		}
		.txt5 {
		      z-index: 38;
		      width: 686upx;
		      height: 48upx;
		      display: block;
		      overflow-wrap: break-word;
		      color: rgba(158, 158, 158, 1);
		      font-size: 28upx;
		      white-space: nowrap;
		      line-height: 48upx;
		      text-align: left;
		      align-self: flex-start;
		      margin-top: 20upx;
			  margin-left: 32upx;
		}
		.next {
			margin-left: 32upx;
			margin-top: 540upx;
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