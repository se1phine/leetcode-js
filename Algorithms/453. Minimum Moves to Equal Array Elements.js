/**
 * @param {number[]} nums
 * @return {number}
 */
const minMoves = function(nums) {
    const min = nums.sort((a, b) => a - b)[0]
    const newNums = nums.map(v => v - min)
    return newNums.reduce((ac, cv) => ac + cv)
};
