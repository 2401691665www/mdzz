import axios from 'axios'

let _fetch = axios.create({
    // baseURL: process.env.VUE_APP_URL,
    // baseURL: 'http://api-qukuai.huanlian1688.com'
    baseURL: 'http://blockchain-test.jbjk1688.top'
})

export default _fetch