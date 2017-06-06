/**
 * @param {number[]} nums
 * @return {string[]}
 */
const findRelativeRanks = function(nums) {
    const _nums = nums.map((v, i) => ({k: i, v}))
		.sort((a, b) => b.v - a.v)
		.map((v, i) => ({v: i + 1, k: v.k}))

	if(_nums[0]) _nums[0].v = "Gold Medal"
	if(_nums[1]) _nums[1].v = "Silver Medal"
	if(_nums[2]) _nums[2].v = "Bronze Medal"

	return _nums.sort((a, b) => a.k - b.k)
		.map(v => String(v.v))

};
