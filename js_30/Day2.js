/**
 * @param {string} val
 * @return {Object}
 */

var expect = function(val) {
    const errorController = (err) => { throw new Error(err)};
    return {
         toBe : (value) => val === value ? true : errorController("Not Equal"),
         notToBe: (value) => val === value ? errorController("Equal") : true
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
