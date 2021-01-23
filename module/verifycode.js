module.exports = (query, request) => {
  const data = {
    client: 4,
    // _session: "16114184086265e6c4f9b636e8dea",
    mobile: query.phone,
    countryCode: "+86"
    // sign_ran: "7eb16946f539aa602711aa391e4df6c7",
    // code: "7eb16946f539aa602711aa391e4df6c7"
  };
  return request(
    "POST",
    "https://passport.douguo.com/apiSign/sendVerifyCode ",
    data,
    {
      cookie: query.cookie,
      proxy: query.proxy
    }
  );
};
