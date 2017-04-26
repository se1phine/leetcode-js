/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function(nums) {
    const modelArr = [...Array(nums.length).keys()].map(v => v += 1)
    nums = [...new Set(nums)].sort((a, b) => a - b)
    let result = []

    for (let [i, v] of modelArr.entries()) {
        if (v !== nums[i]) {
            result.push(v)
            nums.splice(i, 0, v)
        }
    }
    return result
};
