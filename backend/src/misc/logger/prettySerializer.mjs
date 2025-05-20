export const prettySerializer = {
  req(req) {
    return {
      method: req.method,
      url: req.url,
      // headers: req.headers,
    };
  },

  res(res) {
    return {
      statusCode: res.statusCode,
      // headers: res.getHeaders(),
    };
  },
};
