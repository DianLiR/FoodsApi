module.exports = (query, request) => {
  const data = {
    // _session: "16114280564595e6c4f9b636e8dea",
    agent_id: query.agent_id, //!
    // client: 4,
    // code: "4afd958d11c1c53e",
    recipe_id: query.recipe_id, //!
    // sign_ran: "52ade175e967f09c34205edb4406c91a",
    signtime: query.signtime, //!
    user_id: query.user_id, //!
    // userid: 26273395,
    _as:
      "_session=MTYxMTQyODA1NjQ1OTVlNmM0ZjliNjM2ZThkZWE=&agent_id=MzM0ZTAxZmVjNjQwYmIyNGZiNTExNGQ5NzkyYmMyMTU=&client=NA==&code=NGFmZDk1OGQxMWMxYzUzZQ==&recipe_id=MjA1NzEyMQ==&sign_ran=NTJhZGUxNzVlOTY3ZjA5YzM0MjA1ZWRiNDQwNmM5MWE=&signtime=MTYxMTQyODI1OQ==&user_id=MjYyNzMzOTU=&userid=MjYyNzMzOTU=",
    signature: "8ddbfe726cf2282217ee99028fbb0c54"
  };
  return request("POST", "https://api.douguo.net/user/cancelCollect", data, {
    cookie: query.cookie,
    proxy: query.proxy
  });
};
