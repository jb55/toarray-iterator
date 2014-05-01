'use strict';

module.exports = function iteratorToArray(iter){
  let result = [];
  for (let x of iter)
    result.push(x);
  return result;
}
