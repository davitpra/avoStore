module.exports = {
    // typescript: {
    //   ignoreBuildErrors: true,
    // },
    async rewrites() {
      return [
        {
          // Nueva ruta
          source: '/avocado/:path*',
          // De que ruta vendrá
          destination: '/product/:path*',
        },
      ]
    },
  }