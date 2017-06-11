'use strict'

const resin = require('topcoat-resin')
const extend = require('extend-shallow')

exports.name = 'resin'
exports.outputFormat = 'css'

exports.render = function (str, options, locals) {
  options = typeof options === 'object' ? options : {}
  extend(options, locals)
  options.contents = str

  return resin(options)
}

exports.renderFile = function (str, options, locals) {
  options = typeof options === 'object' ? options : {}
  extend(options, locals)
  options.src = str

  return resin(options)
}
