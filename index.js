'use strict'

var resin = require('topcoat-resin')

exports.name = 'resin'
exports.outputFormat = 'css'

exports.render = function (str, options) {
  options = typeof options === 'object' ? options : {}
  options.contents = str

  return resin(options)
}
