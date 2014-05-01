'use strict';

let assert = require('assert');
let toArray = require('./');

describe('toarray-iterator', function(){
  it('works', function(){
    function* nums() {
      yield 1;
      yield 2;
    }
    assert(toArray(nums()).length === 2);
  });

  it('works with nil iterator', function(){
    function* nil() {}
    assert(toArray(nil()).length === 0);
  });
});
