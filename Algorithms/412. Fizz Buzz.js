/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function(n) {
    return [...Array(n).keys()].map((v, i) => (i + 1) % 3 === 0 ? 'Fizz' : String(i + 1))
            .map((v, i) => (i + 1) % 5 === 0 ? 'Buzz' : v)
            .map((v, i) => (i + 1) % 15 === 0 ? 'FizzBuzz' : v)
};
