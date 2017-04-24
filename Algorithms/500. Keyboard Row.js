/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function(words) {
    const inputRow = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
    return words.filter(w => {
        const findRow = inputRow.find(v => v.includes(w.toLowerCase()[0]))
        return w.length === w.toLowerCase().split('').filter(v => findRow.includes(v)).length
    })
};
