const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: "/curex/",
    devServer: {
        proxy: {

            '/api': {
                target: 'https://min-api.cryptocompare.com', // https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,USD,EUR&tsyms=BTC,ETH,USD,EUR   //https://api.cryptonator.com/api/ticker/uah-bts
                changeOrigin: true,
                pathRewrite: { '^/api': '' },
                logLevel: 'debug'
            },


        }
    }
})