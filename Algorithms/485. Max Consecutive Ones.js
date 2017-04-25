/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function(nums) {
    const splitStr =  nums.map(v => v === 1 ? 1 : null).join().split(/,,+/).sort((a, b) => b.length - a.length)[0]
    return /1/.test(splitStr) ? splitStr.match(/1/g).length : 0
};
