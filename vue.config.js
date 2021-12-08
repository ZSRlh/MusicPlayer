module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://netease-cloud-music-api-murex-two.vercel.app",
        pathRewrite: { "^/api": "" },
        changeOrigin: true, // 用于控制请求头中的host值，true为目标服务器，false为实际服务器
      },
    },
  },
};
