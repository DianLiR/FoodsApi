module.exports = (query, request) => {
    query.start = query.start || 0; //默认偏移0
    query.end = query.end || 10; //默认返回10
    const data = {
        client:4,
    }
    return request(
        'POST',
        // https://api.douguo.net/products/allhv1/30/30/v1
        `https://api.douguo.net/products/allhv1/${query.start}/${query.end}/v1`,
        data,
        {cookie: query.cookie, proxy: query.proxy}
    )
}