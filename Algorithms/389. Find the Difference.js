/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function(s, t) {
    if (!s) return t
    const calcCharSum = (str) => str.split('').map(v => v.charCodeAt(0)).reduce((av, cv) => av + cv)

    return String.fromCharCode(calcCharSum(t) - calcCharSum(s))
};
