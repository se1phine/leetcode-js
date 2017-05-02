/**
 * @param {number} area
 * @return {number[]}
 */
const constructRectangle = function(area) {
    const sqrt = Math.sqrt(area)
    if (Number.isInteger(sqrt)) {
        return [sqrt, sqrt]
    } else {
        for (var width = Math.floor(sqrt); width > 0; width--) {
            if (area % width === 0) break;
        }
        console.log(width)
        return [area/width, width]
    }
};
