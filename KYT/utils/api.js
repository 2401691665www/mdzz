
import fetch from './fetch.js'
//获取商品列表
export function getCnodeList(data) {
    return fetch(
        '/api/register',
        'POST',
        data
    )
}
