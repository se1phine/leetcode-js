/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
const maxCount = function(m, n, ops) {
    if (!ops.length) {
        return m * n
    }
    const minCol = ops.map(v => v[0]).sort((a, b) => a - b)[0]
    const minRow = ops.map(v => v[1]).sort((a, b) => a - b)[0]
    return minCol * minRow
};
