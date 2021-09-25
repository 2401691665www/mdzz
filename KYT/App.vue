<script>
	import { getCnodeList } from './utils/api.js'
	export default {
		onLaunch: function() {
		},
		onShow: function() {
		},
		onHide: function() {
		},
		onShow() {
			let data = {
				username: '123897',
				pay_pwd: '2342342',
				confirm_pay_pwd: '234342',
				invitation_code: '000'
			}
			getCnodeList(data).then((res) => {
			    console.log(res)
			})
		}
	}
</script>

<style>
	/*每个页面公共css */
	* {
		margin: 0;
		padding: 0;
	}
	page {
		width: 100%;
		height: 100%;
		background: #FFAC46;
	}
	ul,ol,li{
	    list-style:none;
	}
	a,u{
	    text-decoration: none;
	}
	b,strong{
	    font-weight: normal;
	}
	em,i{
	    font-style:normal;
	}
	img{
	    border:0;
	    display:block;
	    /*清除图片下面的大于3px的间距*/
	}
	input{
	    outline:none;
	    display:block;
	}
	page {
		height: 100%;
	}
</style>
