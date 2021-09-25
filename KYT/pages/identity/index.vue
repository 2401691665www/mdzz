<template>
<view class="identity">
	<view class="header">
		<view class="back">
			<image @tap="ba" src="../../static/icon/identity_back@2x.png" mode="widthFix"></image>
			<view class="p1">创建身份</view>
			<view class="p2">创建身份您将获得KYT钱包</view>
		</view>
	</view>
	<view class="content">
		<li :style="{'border-bottom': bor}" class="l1">
			 <image class="user_img" src="../../static/icon/username@2x.png" mode="widthFix">	 
			 </image>
		  <input
		     v-model="val"
             @keyup="val=val.replace(/^([a-z0-9\.\@\!\#\$\%\^\&\*\(\)]){6,20}$/i) "
		     @focus="ipt1()" 
		     @blur="ipt2()" 
		     placeholder="请输入身份名" 
		     class="ipt"
			 type="text"
		   >
		  </input>
		  <span v-if='idf'>*可输入字母、数字，限制6-20个字符</span>
		</li>
		<li :style="{'border-bottom': bor2}" class="l2">
			 <image class="user_img" src="../../static/icon/password@2x.png" mode="widthFix">	 
			 </image>
		  <input
		  v-model="val2"
		  @focus="ipt3()"
		  @blur="ipt4()" 
		  placeholder="请设置支付密码" 
		  class="ipt" 
		  type="password"
		  >
		  </input>
		  <span v-if='idf2'>密码少于6位</span>
		</li>
		<li :style="{'border-bottom': bor3}" class="l3">
			 <image class="user_img" src="../../static/icon/password@2x.png" mode="widthFix">	 
			 </image>
		  <input
		  @focus="ipt5()"
		  @blur="ipt6()" 
		  placeholder="请确认支付密码" 
		  class="ipt" 
		  :type="p"
		  :value="val3"
		  >
		  </input>
		  <span v-if='idf3'>两次密码不一致</span>
		  <image @tap="pass" class="pass_icon" :src="pass_icon"></image>
		</li>
		<li :style="{'border-bottom': bor4}" class="l4">
			 <image class="user_img" src="../../static/icon/invite@2x.png" mode="widthFix">	 
			 </image>
		  <input 
		  @focus="ipt7()"
		  @blur="ipt8()" 
		  placeholder="请输入邀请码" 
		  class="ipt" 
		  type="text"
		  >
		  </input>
		</li>
	</view>
	<view :style="{background: bac}" @tap="skip" class="footer">创建</view>
</view>
</template>
<!-- ^(?![\d]+$)(?![a-zA-Z]+$)(?![!#$%^&*]+$)[\da-zA-Z!#$%^&*]{6,20}$ -->
<script>
export default {
	data() {
		return {
			bac: '',
			p: 'password',
			pass_icon: '../../static/icon/pass_icon@2x.png',
			idf: false,
			idf2: false,
			idf3: false,
			val: '',
			val2: '',
			val3: '',
			bor: '',
			bor2: '',
			bor3: '',
			bor4: ''
		}
	},
    methods: {

		skip() {
			if(this.bac == 'linear-gradient(90deg, #F9D531 0%, #E4791C 100%)') {
				console.log('skip')
				uni.navigateTo({
					url: '../backup/index'
				})
			}
		},
		ba() {
			uni.navigateTo({
				url: '../index/index'
			})
		},
		pass() {
			if(this.pass_icon == '../../static/icon/pass_icon@2x.png') {
				this.pass_icon = '../../static/icon/shoupass@2x.png'
				this.p = 'text'
			}
			else {
				this.pass_icon = '../../static/icon/pass_icon@2x.png'
				this.p = 'password'
			}
		},
		ipt1() {
			this.idf = true
			this.bor = '2upx solid #FF5700'
		},
		ipt2() {
			this.idf = false
			this.bor = ''
			this.idf3 = false
			this.bor3 = ''
			if(this.val&&this.val2 != '') {
				this.bac = 'linear-gradient(90deg, #F9D531 0%, #E4791C 100%)'
			}
			else {
				this.bac = ''
			}
		},
		ipt3() {
			this.idf2 = true
			this.bor2 = '2upx solid #FF5700'
		},
		ipt4() {
			this.idf2 = false
			this.bor2 = ''
			this.idf3 = false
			this.bor3 = ''
			if(this.val&&this.val2 != '') {
				this.bac = 'linear-gradient(90deg, #F9D531 0%, #E4791C 100%)'
			}
			else {
				this.bac = ''
			}
		},
		ipt5() {
			this.idf3 = true
			this.bor3 = '2upx solid #FF5700'
		},
		ipt6() {
			this.idf3 = false
			this.bor3 = ''
			if(this.val&&this.val2 != '') {
				this.bac = 'linear-gradient(90deg, #F9D531 0%, #E4791C 100%)'
			}
			else {
				this.bac = ''
			}
		},
		ipt7() {
			this.idf4 = true
			this.bor4 = '2upx solid #FF5700'
		},
		ipt8() {
			this.idf4 = false
			this.bor4 = ''
		}
	}
}
</script>


<style lang="scss" scoped>
	
page {
	background: #FFFFFF;
	height: 100%;
}
.identity {
	width: 100%;
	height: 100%;
	overflow: hidden;
}
.header {
	margin-top: 108upx;
	width: 100%;
	height: 328upx;
	.back {
		width: 100%;
		height: 48upx;
		image {
			display: block;
			width: 48upx;
			height: 48upx;
			margin-left: 32upx;
		}
		.p1 {
			height: 48upx;
			margin-left: 32upx;
			margin-top: 48upx;
			line-height: 48upx;
			font-size: 48upx;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;
			color: #221206;
		}
		.p2 {
			height: 48upx;
			margin-left: 32upx;
			margin-top: 28upx;
			font-size: 24upx;
			line-height: 48upx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #9E9E9E;
		}
	}
}
.content {
	width: 100%;
	height: 524upx;
	.l1 {
		position: relative;
		width: 692upx;
		height: 72upx;
		margin-left: 40upx;
		border-bottom: 2upx solid #F0F0F0;
		span {
			position: absolute;
			top: 82upx;
			height: 34upx;
			margin-left: 70upx;
			line-height: 34upx;
			font-size: 12px;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 800;
			color: #FFA02B;
		}
		.ipt {
			caret-color:#AFAAA4;
			position: absolute;
			top: 0;
			left: 68upx;
			width: 616upx;
			height: 44upx;
			font-size: 32upx;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;
			color: #221206;
			line-height: 44upx;
			.ipt::placeholder {
				font-size: 32upx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #AFAAA4;
				line-height: 44px;
			}
		}
		.user_img {
			display: block;
			width: 40upx;
			height: 40upx;
			margin-top: 0;
			margin-left: 8upx;
		}
	}
	
	.l2 {
		position: relative;
		width: 692upx;
		height: 72upx;
		margin-left: 40upx;
		margin-top: 76upx;
		border-bottom: 2upx solid #F0F0F0;
		span {
			position: absolute;
			top: 82upx;
			height: 34upx;
			margin-left: 70upx;
			line-height: 34upx;
			font-size: 12px;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 800;
			color: #FFA02B;
		}
		.ipt {
			caret-color:#AFAAA4;
			position: absolute;
			top: 0;
			left: 68upx;
			width: 616upx;
			height: 44upx;
			font-size: 32upx;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;
			color: #221206;
			line-height: 44upx;
			.ipt::placeholder {
				font-size: 32upx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #AFAAA4;
				line-height: 44px;
			}
		}
		.user_img {
			display: block;
			width: 40upx;
			height: 40upx;
			margin-top: 0;
			margin-left: 8upx;
		}
	}
	
	.l3 {
		position: relative;
		width: 692upx;
		height: 72upx;
		margin-left: 40upx;
		margin-top: 76upx;
		border-bottom: 2upx solid #F0F0F0;
		span {
			position: absolute;
			top: 82upx;
			height: 34upx;
			margin-left: 70upx;
			line-height: 34upx;
			font-size: 12px;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 800;
			color: #FFA02B;
		}
		.ipt {
			caret-color:#AFAAA4;
			position: absolute;
			top: 0;
			left: 68upx;
			width: 616upx;
			height: 44upx;
			font-size: 32upx;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;
			color: #221206;
			line-height: 44upx;
			.ipt::placeholder {
				font-size: 32upx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #AFAAA4;
				line-height: 44px;
			}
		}
		.user_img {
			display: block;
			width: 40upx;
			height: 40upx;
			margin-top: 0;
			margin-left: 8upx;
		}
		.pass_icon {
			display: block;
			width: 32upx;
			height: 32upx;
			position: absolute;
			top: 8upx;
			right: 40upx;
		}
	}
	
	.l4 {
		position: relative;
		width: 692upx;
		height: 72upx;
		margin-left: 40upx;
		margin-top: 76upx;
		border-bottom: 2upx solid #F0F0F0;
		.ipt {
			caret-color:#AFAAA4;
			position: absolute;
			top: 0;
			left: 68upx;
			width: 616upx;
			height: 44upx;
			font-size: 32upx;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;
			color: #221206;
			line-height: 44upx;
			.ipt::placeholder {
				font-size: 32upx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #AFAAA4;
				line-height: 44px;
			}
		}
		.user_img {
			display: block;
			width: 40upx;
			height: 40upx;
			margin-top: 0;
			margin-left: 8upx;
		}
	}
	
}
.footer {
	margin-top: 544upx;
	margin-left: 32upx;
	width: 686upx;
	height: 88upx;
	background: #CECECE;
	border-radius: 44upx;
	text-align: center;
	line-height: 88upx;
	color: #FFFFFF;
}
</style>