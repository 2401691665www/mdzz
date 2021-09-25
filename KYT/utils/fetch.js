const baseUrl = 'http://api.kytoken.xyz'

export default function fetch(url, method, data) {
    return new Promise((resolve, reject) => {
        uni.request({
            url: baseUrl + url,
            method,
            data,
			timeout: 7000,
            header: {
                token: '1912'
            },
			
            success: (res) => {
				if(res.data && res.statusCode === 200) {
					resolve(res.data)
				}
            },
            fail: (res) => {
                reject(res.data)
            }
        })
    })
}