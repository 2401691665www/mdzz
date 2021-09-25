import _fetch from './request.js'

// import axios from 'axios'
// 最新区块与最新交易
function blockTran(data) {
    return _fetch({
        url: "/api/v1/query/block_tran",
        method: "post",
        data
    })
}

// 综合查询
function syntheSize(data) {
    return _fetch({
        // url: process.env. + "/api/v1/query/synthesize",
        url: '/api/v1/query/synthesize',
        method: "post",
        data,
    })
}
// 地址查询
function addressQuery(data) {
    return _fetch({
        url: "/api/v1/query/address_query",
        method: "post",
        data
    })
}

export { blockTran, syntheSize, addressQuery }