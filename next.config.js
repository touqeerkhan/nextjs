const path = require('path')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
   // Use the CDN in production and localhost for development.
   assetPrefix: isProd ? 'https://graana.com' : '',
}