##
cd vue-study
npm run dev

##

运行
npm run serve
安装或卸载npm（cnpm）Mac前面必须要加sudo

##

启动node.js
npm start
##

📦文件
npm run build

##

 //filename: '[name].[hash].js',  打包后文件名是否加入哈希值，代码在package.json里，不针对vue脚手架

mongodb数据库启动
单击一下终端，command+n新建一个终端，输入cd /usr/local/mongodb/bin回车，进入mongodb bin文件夹，随后输入./mongo，回车，即可看到： 
关闭
crl+c

##

启动别人的项目要先执行
cnpm install   (项目依赖保)

##

创建vue项目（脚手架）
全局安装脚手架：（我已经安装了）
cnpm install @vue/cli -g
创建方法
vue ui
或者
vue create xiangmu  （一般这种）
然后
cd xiangmu/（进入文件夹）
最后启动
vue run serve

脚手架细节：

package.json里

 "scripts": {
    "serve": "vue-cli-service serve --open", （加上--open可以自动打开浏览器，默认没有）
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "start": "npm run serve"  （加上之后可以npm start启动项目，默认没有）
  },


  ##

module.exports = { 
    devServer: {
      
        port: '8989'
        
    },
    filenameHashing:false //加了之后打包后文件名称没有哈希值，默认为true
} 
