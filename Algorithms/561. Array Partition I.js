/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    return nums.sort((a, b) => a - b).reduce((iv,cv,ci) => ci % 2 === 0 ? iv + cv : iv)
};
