//获取更多home
module.exports = (query, request) => {
    const data = {
        client: 4,
    };
    return request(
        'POST',
        'http://api.douguo.net/personalized/home',
        // https://api.douguo.net/personalized/home
        data,
        {cookie: query.cookie, proxy: query.proxy}
    )
}