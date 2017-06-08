/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function(nums1, nums2) {
    const resultArr = nums1.filter(v => nums2.findIndex(v2 => v2 === v) > -1)
    return [...new Set(resultArr)]
};
