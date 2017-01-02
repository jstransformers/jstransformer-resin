'use strict'

var resin = require('topcoat-resin')
var extend = require('extend-shallow')

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
