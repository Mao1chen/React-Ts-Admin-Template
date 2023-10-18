export default {
  dev: {
    "/api": {
      target: "http://47.109.36.196:7777",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    },
  },
};
