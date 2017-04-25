/**
 * @param {number} n
 * @return {boolean}
 */
const canWinNim = function(n) {
    if(n % 4 === 1 || n % 4 === 2 || n % 4 === 3) return true
    else return false
};
