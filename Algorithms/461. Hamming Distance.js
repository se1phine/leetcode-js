/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = function(x, y) {
    const matchArr = (x ^ y).toString(2).match(/1/g)
    return matchArr ? matchArr.length : 0
};
