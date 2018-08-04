'use strict'

const resin = require('resin')
const extend = require('extend-shallow')

exports.name = 'resin'
exports.outputFormat = 'css'

exports.renderAsync = function (str, options, locals) {
  return new Promise((resolve, reject) => {
    options = typeof options === 'object' ? options : {}
    extend(options, locals)

    // Prepare the variables
    options.css = str
    options.vars = options.var !== false
    options.extend = options.extend !== false

    resin(options).then(result => {
      // Warn if there are any syntax errors.
      if (result.messages) {
        for (const message of result.messages) {
          console.warn(message.toString())
        }
      }

      // Return the result.
      return resolve(result.css)
    }).catch(result => {
      return reject(result)
    })
  })
}

exports.renderFileAsync = function (filename, options, locals) {
  return new Promise((resolve, reject) => {
    options = typeof options === 'object' ? options : {}
    extend(options, locals)

    // Prepare the variables
    options.src = filename
    options.vars = options.var !== false
    options.extend = options.extend !== false

    resin(options).then(result => {
      // Warn if there are any syntax errors.
      if (result.messages) {
        for (const message of result.messages) {
          console.warn(message.toString())
        }
      }

      // Return the result.
      return resolve(result.css)
    }).catch(result => {
      return reject(result)
    })
  })
}
