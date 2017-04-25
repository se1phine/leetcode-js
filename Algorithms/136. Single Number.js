/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
    const sum = nums.reduce((av, cv) => av + cv)
    const singleSum = [...new Set(nums)].reduce((av, cv) => av + cv)
    return -1 * (sum - singleSum * 2)
};
