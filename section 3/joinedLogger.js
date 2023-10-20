/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(value) {
    return {
        toBe: function(val) {
            if (value === val) {
                return true;
            } else {
                return { error: "Not Equal" };
            }
        },
        notToBe: function(val) {
            if (value !== val) {
                return true;
            } else {
                return { error: "Equal" };
            }
        }
    };
};

console.log(expect(5).toBe(null)); // Devolverá {"error":"Not Equal"}
