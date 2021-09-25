<template>
	<view class="index">
		<view @tap="quxiaole" class="quxiao"></view>
		<view :style="{height: hei}" class="box">
			<view class="header">
				<view class="cancle">
					<image @tap="cancle" src="../../static/icon/cancel@2x.png" mode="widthFix"></image>
				</view>
				<p>服务条款</p>
			</view>
			<view class="article">
				 <span class="paragraph1">
					 区块链钱包不同于传统网站账户，它是基于密码学的去中心化账户系统；
					 <br />
					 你必须保管好钱包的私钥和交易密码，任何意外将会导致资产丢失；
					 <br />
					 我们建议先做双重备份，再打入小额测试，记住别把数字货币都放在一个钱包里！
					 <br />
					 切勿截图、存储到网络硬盘、微信等传输！浙江省可能被第三方恶意软件收集，造成资产损失。
				 </span>
			</view>
			<view class="footer">
				<view class="agree">
					<image :src="select_img" @tap="select" mode="widthFix"></image>
					<span>我已阅读并同意服务条款</span>
				</view>
				<view :style="{background: create_back}" @tap="create_change" class="create">
					创建
				</view>
			</view>
		</view>
		<view class="bg">
			<view :style="{background: back_idx,opacity: opac_idx,height: h}" class="opacity-index"></view>
			<image src="../../static/logo/bg@2x.png" mode="widthFix"></image>
		</view>
		<view :style="{opacity: logo_opac}" class="logo">
			<image src="../../static/logo/logo@2x.png" mode="widthFix"></image>
		</view>
		<view class="content">
			<ul @tap="block">
				<li class="l1">
					<view class="p1">
						<span>创建身份</span>
						<image src="../../static/logo/icon_ahead@2x.png" mode="widthFix"></image>
					</view>
					<view class="p2">
						<span>第一次使用KYT</span>
					</view>
				</li>
				<view class="border"></view>
				<li class="l2">
					<view class="p1">
						<span>恢复身份</span>
						<image src="../../static/logo/icon_ahead@2x.png" mode="widthFix"></image>
					</view>
					<view class="p2">
						<span>已拥有身份</span>
					</view>
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hei: '0',
				select_img: '../../static/icon/select@2x.png',
				create_back: '',
				back_idx: '',
				opac_idx: '',
				h: '',
				logo_opac: ''
			}
		},
		methods: {
			block() {
				this.hei = '1014upx'
				this.back_idx = '#000000',
				this.opac_idx = '0.49',
				this.h = '100%',
				this.logo_opac = '0.49'
			},
			cancle() {
				this.hei = '0',
				this.select_img = '../../static/icon/select@2x.png',
				this.back_idx = '',
				this.opac_idx =  '',
				this.h = '0',
				this.logo_opac = ''
			},
			quxiaole() {
				this.hei = '0',
				this.back_idx = '',
				this.opac_idx = '',
				this.h = '0',
				this.logo_opac = ''
			},
			select() {
				if(this.select_img == '../../static/icon/select@2x.png') {
					this.select_img = '../../static/icon/select_show@2x.png'
					this.create_back = 'linear-gradient(90deg, #F9D531 0%, #E4791C 100%)'
				}
				else {
					this.select_img = '../../static/icon/select@2x.png'
					this.create_back = ''
				}
			},
			create_change() {
				if(this.create_back == 'linear-gradient(90deg, #F9D531 0%, #E4791C 100%)') {
					console.log('可以跳转了')
					uni.navigateTo({url: '/pages/identity/index'})
					
				}
				else {
					console.log('不能跳转')
				}
			}
		}
	}
</script>

<style lang="scss">
	.index {
		width: 100%;
		height: 100%;
		position: relative;
	}
	.quxiao {
		width: 100%;
		height: 610upx;
		position: absolute;
		top: 0;
		z-index: 67;
	}
	.opacity-index {
		width: 100%;
	}
	.box {
		overflow: hidden;
		transition: 0.3s;
		position: relative;
		width: 100%;
		// height: 62.43842%;
		// height: 1014upx;
		position: fixed;
		bottom: 0;
		left: 0;
		background: #FFFFFF;
		z-index: 50;		
		border-radius: 40upx 40upx 0 0;
		.header {
			overflow: hidden;
			position: relative;
			width: 100%;
			height: 136rpx;
			border-radius: 40upx 40upx 0 0;
			.cancle {
				position: absolute;
				left: 28upx;
				top: 48upx;
				width: 32upx;
				height: 32upx;
				image {
					width: 100%;
					height: 100%;
				}
			}
			p {
				position: absolute;
				top: 40upx;
				left: 304upx;
				height: 48upx;
				line-height: 48upx;
				text-align: center;
				font-size: 36upx;
				font-family: PingFangSC-Semibold, PingFang SC;
				font-weight: 600;
				color: #221206;
			}
		}
		.article {
			overflow: hidden;
			width: 678upx;
			height: 400upx;
			position: absolute;
			top: 136upx;
			left: 36upx;
			.paragraph1 {
				overflow: hidden;
				z-index: 51;
				width: 678upx;
				height: 400upx;
				display: block;
				overflow-wrap: break-word;
				font-weight: 400;
				color: #221206;
				font-size: 28upx;
				line-height: 50upx;
				text-align: left;
				align-self: center;
				margin-top: 0;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}
	    .footer {
			overflow: hidden;
			position: absolute;
			left: 0;
			top: 826upx;
			width: 100%;
			height: 188upx;
			.agree {
				overflow: hidden;
				position: relative;
				width: 306upx;
				height: 48upx;
				margin-left: 200upx;
				image {
					float: left;
					display: block;
					width: 28upx;
					height: 28upx;
					position: absolute;
					top: 50%;
					left: 0;
					margin-top: -14upx;
				}
			}
			.create {
				overflow: hidden;
				width: 686upx;
				height: 88upx;
				background: #CECECE;
				border-radius: 44upx;
				margin-left: 32upx;
				margin-top: 16upx;
				text-align: center;
				line-height: 88upx;
				color: #FFFFFF;
			}	
			span {
				float: left;
				width: 264upx;
				height: 48upx;
				display: block;
				color: rgba(158, 158, 158, 1);
				font-size: 24upx;
				line-height: 48upx;
				text-align: center;
				position: absolute;
				right: 0;
			}
		     
		}	    
	}
	.bg {
		position: fixed;
		top: 0;
		left: 0;
		width: 750upx;
		height: 100%;
		image {	
			display: block;
			width: 100%;
			height: 100%;
		}
	}
	.logo {
		position: absolute;
		top: 270upx;
		width: 100%;
		height: 234upx;
		text-align: center;
		
		image {
			width: 244upx;
			height: 100%;
		}
	}
	.content {
		position: absolute;
		width: 638upx;
		height: 306upx;
		top: 624upx;
		left: 56upx;
		overflow: hidden;
		background-color: rgba(255, 255, 255, 0.24);
		border-radius: 16upx;
		z-index: 40;
	}
	ul {
		z-index: auto;
		width: 564upx;
		height: 250upx;
		margin-top: 28upx;
		margin-left: 40upx;
		.l1 {
			width: 100%;
			height: 124upx;
			.p1 {
				z-index: 42;
				width: 100%;
				height: 50upx;
				overflow: hidden;
				span {
					float: left;
					display: block;
					line-height: 50upx;
					text-align: center;
					height: 50upx;
					font-size: 36upx;
					font-family: PingFangSC-Semibold, PingFang SC;
					font-weight: 600;
					color: #FFFFFF;
				}
				image {
					z-index: 46;
					display: block;
					width: 42upx;
					height: 40upx;
					margin-left: 378upx;
					float: left;
				}
			}
			.p2 {
				z-index: 44;
				width: 100%;
				height: 34upx;
				margin-top: 8upx;
				span {
					display: block;
					width: 100%;
					height: 34upx;
					font-size: 24upx;
					font-family: PingFangSC-Semibold, PingFang SC;
					font-weight: 600;
					color: rgba(255, 255, 255, 0.7);
					line-height: 34upx;
				}
			}
		}
		.border {
			width: 100%;
			height: 2upx;
			background: rgba(255, 255, 255, 0.07);
		}
		.l2 {
			width: 100%;
			height: 124upx;
			.p1 {
				z-index: 42;
				width: 100%;
				height: 50upx;
				margin-top: 32upx;
				overflow: hidden;
				span {
					float: left;
					display: block;
					line-height: 50upx;
					text-align: center;
					height: 50upx;
					font-size: 36upx;
					font-family: PingFangSC-Semibold, PingFang SC;
					font-weight: 600;
					color: #FFFFFF;
				}
				image {
					z-index: 46;
					display: block;
					width: 42upx;
					height: 40upx;
					margin-left: 378upx;
					float: left;
				}
			}
			.p2 {
				z-index: 44;
				width: 100%;
				height: 34upx;
				margin-top: 8upx;
				span {
					display: block;
					width: 100%;
					height: 34upx;
					font-size: 24upx;
					font-family: PingFangSC-Semibold, PingFang SC;
					font-weight: 600;
					color: rgba(255, 255, 255, 0.7);
					line-height: 34upx;
				}
			}
		}
	}
</style>
