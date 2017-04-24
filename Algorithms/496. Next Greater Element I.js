/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElement = function(findNums, nums) {
    return findNums.map(n => {
        const newArr = nums.slice(nums.findIndex(v => v === n))
        let result = -1;
        for (let [i, v] of newArr.entries()) {
            if (v > n) {
                result = v
                break;
            }
        }
        return result
    })
};
