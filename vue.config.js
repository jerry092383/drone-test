module.exports = {
    assetsDir: 'assets',
    publicPath: process.env.NODE_ENV === 'production'
        ? '/drone-test/'
        : '/',
};