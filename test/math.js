module.exports = {
  add(...args) {
    return args.reduce((pre, cur) => {
      return pre + cur
    })
  },
  mul(...args) {
    return args.reduce((pre, cur) => {
      return pre * cur
    })
  },
  cover() {
    return '?? nyc npm test'
  }
}
