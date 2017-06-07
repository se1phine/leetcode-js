/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = function(nums, r, c) {
    const array = nums.toString().split(',').map(v => parseInt(v, 10))
    if (array.length !== r * c) return nums
    const result = Array(r).join().split(',').map(v => Array(c).join().split(','))
    
    return result.map((row, rowIndex) =>
        row.map((column, columnIndex) =>
            array[rowIndex * c + columnIndex]
        )
    )
};
