import Vue from "vue"
import Vant from "vant";
import VueRouter from "vue-router";
import App from "./App.vue";
// 语言切换
import VueI18n from 'vue-i18n'
// 样式引入
import "vant/lib/index.css";
import "amfe-flexible";
import "normalize.css";

// 开启手机控制台
// import Vconsole from 'vconsole';
// new Vconsole();

Vue.use(VueRouter);
Vue.use(Vant);
Vue.use(VueI18n)
Vue.config.productionTip = false;

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: "/",
            component: () =>
                import ("@/views/index"),
        },
        {
            path: "/index",
            component: () =>
                import ("@/views/index"),
        },
        {
            path: "/blockchain",
            component: () =>
                import ("@/views/blockchain"),
        },
        {
            path: "/aboutus",
            component: () =>
                import ("@/views/aboutus"),
        },
        {
            path: "/overview",
            component: () =>
                import ("@/views/overview"),
        }
    ],
});
router.beforeEach((to, from, next) => {
    // 让页面回到顶部
    document.documentElement.scrollTop = 0
        // 调用 next()，一定要调用 next 方法，否则钩子就不会被销毁
    next()
})

// 语言切换
const i18n = new VueI18n({
    locale: localStorage.getItem('locale') || 'EN', // 语言标识
    messages: {
        'CN': require('./il18n/langs/zh'),
        'EN': require('./il18n/langs/en')
    }
})
new Vue({
    router,
    i18n,
    render: (h) => h(App),
}).$mount("#app");