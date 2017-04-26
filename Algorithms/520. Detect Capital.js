/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = function(word) {
    if (word.charCodeAt(0) > 64 && word.charCodeAt(0) < 91) { // 首字母大写字母
        const subStr = word.substr(1)
        return subStr === subStr.toLowerCase() || subStr === subStr.toUpperCase()
    } else {
        return word === word.toLowerCase()
    }
};
