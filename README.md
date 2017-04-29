# jstransformer-resin

[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-resin.svg)](https://greenkeeper.io/)

[Resin](https://github.com/topcoat/resin) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-resin/master.svg)](https://travis-ci.org/jstransformers/jstransformer-resin)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-resin/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-resin)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-resin/master.svg)](http://david-dm.org/jstransformers/jstransformer-resin)
[![NPM version](https://img.shields.io/npm/v/jstransformer-resin.svg)](https://www.npmjs.org/package/jstransformer-resin)

## Installation

    npm install jstransformer-resin

## API

```js
var resin = require('jstransformer')(require('jstransformer-resin'));

var options = {
  browsers: ['last 2 version', 'ios', 'android 4'],
  // Add a namespace to your classes to avoid collisions
  namespace: 'jstransformer',
  // Add a license to the final output
  license: '// Copyright 2015 and stuff \n'
};
var css = ':root { var-grey: #666; } .btn { box-shadow: 0 1px var(grey); }';

resin.render(css, options);
//=> '// Copyright 2015 and stuff \n.topcoat-btn {\n  box-shadow: 0 1px #666;\n}'
```

## License

MIT
