/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
    const reverseWord = s => s.split('').reverse().join('')
    return s.split(' ').map(v => reverseWord(v)).join(' ')
};
