import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import { getCookie } from '@/uilts/cookie.js'

Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: localStorage.getItem('locale') || 'zh',
    messages: {
        'zh': require('./langs/zh'),
        'en': require('./langs/en')
    }
})

export default i18n