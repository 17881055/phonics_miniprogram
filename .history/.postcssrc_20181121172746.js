// https://github.com/michael-ciniawsky/postcss-load-config
module.exports = (ctx) => ({
  parser: ctx.parser ? 'sugarss' : false,
  map: ctx.env === 'development' ? ctx.map : false,
  plugins: {
    'postcss-plugin': ctx.options.plugin
  }
})