module.exports = (query, request) => {
  const data = {
    client: 4,
    recipe_id: query.recipe_id,
    user_id: query.user_id
  };
  return request("POST", "https://api.douguo.net/user/addCollect", data, {
    cookie: query.cookie,
    proxy: query.proxy
  });
};
