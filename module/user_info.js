module.exports = (query, request) => {
  query.id = query.id;
  const data = {
    client: 4
  };
  return request("POST", `https://api.douguo.net/user/info/${query.id}`, data, {
    cookie: query.cookie,
    proxy: query.proxy
  });
};
