/**
 * @param {number} num
 * @return {number}
 */
const findComplement = function(num) {
    return Number('0b' + num.toString(2).replace(/0/g, '1')) ^ num
};
