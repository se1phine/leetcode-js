/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numbers, target) {
    for (var left = 0, right = numbers.length - 1; left < right;) {
        const sum = numbers[left] + numbers[right]
        if (sum < target) left++
        else if (sum > target) right--
        else break;
    }
    
    return [left + 1, right + 1]
};
