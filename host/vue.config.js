module.exports = {
  publicPath:
        process.env.NODE_ENV === 'production' ? '/tooicon/host/dist/' : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/main.scss";'
      }
    }
  }
}
