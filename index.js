/**
 * jstransformer-resin <https://github.com/tunnckoCore/jstransformer-resin>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var resin = require('topcoat-resin');

exports.name = 'resin';
exports.inputFormats = ['css', 'resin'];
exports.outputFormat = 'css';

exports.render = function _render(str, options) {
  options = typeof options === 'object' ? options : {};
  options.contents = str;

  return resin(options);
};
