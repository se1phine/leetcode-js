/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const findRestaurant = function(list1, list2) {
    const commonList = list1.filter(v1 => list2.find(v2 => v2 === v1))
    const resultList = commonList.map(v => ({
        indexSum: list1.findIndex(v1 => v1 === v) + list2.findIndex(v2 => v2 === v),
        value: v
    })).sort((a, b) => a.indexSum - b.indexSum)
    const minIndexSum = resultList[0].indexSum
    return resultList.filter(v => v.indexSum === minIndexSum).map(v => v.value)
};
