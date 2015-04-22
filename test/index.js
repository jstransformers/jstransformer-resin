/**
 * jstransformer-resin <https://github.com/tunnckoCore/jstransformer-resin>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var fs = require('fs');
var test = require('assertit');
var transform = require('../index');

test('should transform modern CSS with topcoat-resin', function(done) {
  var fixture = fs.readFileSync('./test/fixture.css', 'utf8');
  var expected = fs.readFileSync('./test/expected.css', 'utf8');
  var actual = transform.render(':root { var-grey: #666; } .btn { box-shadow: 0 1px var(grey); }', {
    namespace: 'topcoat',
    // license: fs.readFileSync('./test/license.txt', 'utf8'),
    url: 'img/'
  });
  // console.log(actual)
  test.equal(actual, '.topcoat-btn {\n  box-shadow: 0 1px #666\n}');
  done();
});

