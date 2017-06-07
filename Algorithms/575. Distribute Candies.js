/**
 * @param {number[]} candies
 * @return {number}
 */
const distributeCandies = function(candies) {
    return Math.min(candies.length/2, new Set(candies).size)
};
