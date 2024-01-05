/**
 * @param {number} n
 * @return {Function} counter
 */

// Approach 1:

var createCounter = function(n) {
    let count = n-1;
  return function() {
    count += 1;
    return count;
  }
};

// Approach 2:

var createCounter = function(n) {

  return function() {
    return n++;
  }
};
 
 const counter = createCounter(10)
 console.log(counter());
 console.log(counter());
 console.log(counter());
 console.log(counter());
 console.log(counter());
