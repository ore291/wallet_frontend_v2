module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
      secret: 'bambooty'
  },
  publicRuntimeConfig: {
      apiUrl: process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000/v1' // development api
          : 'http://localhost:3000/v1' // production api
  }
}