
# toarray-iterator

  Build an array from an iterator

  [![Build Status](https://travis-ci.org/jb55/toarray-iterator.svg)](https://travis-ci.org/jb55/toarray-iterator)

## Installation

  Install with npm

    $ npm install toarray-iterator

## Example

```js
let toArray = require('toarray-iterator');
let map = require('map-iterator');
let filter = require('filter-iterator');
let $ = require('modular-chainer');

// the maps and filters are iterators, they dont create intermediate arrays.
// only one array is constructed once toArray is called
let result = $(iter)
  .to(map, function(x){ return x * 2; })
  .to(map, function(x){ return -x; })
  .to(filter, odd)
  .to(toArray)
  .val
```

## License

  The MIT License (MIT)

  Copyright (c) 2014 William Casarin

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.

