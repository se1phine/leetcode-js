/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = function(grid) {
    const countAdjoin = (arr) => arr.length > 1 ? arr.reduce((av, cv, ci, arr) => {
        if (ci === 1) av = 0
    	if (arr[ci-1] === 1 && cv === 1) ++av	
    	return av
    }) : 0
    
    const transpose = (matrix) => matrix[0].map((x,i) => matrix.map(x => x[i]))
            
    let count = 0
    grid.forEach(v => {count += countAdjoin(v)})
    transpose(grid).forEach(v => {count += countAdjoin(v)})
    
    return grid.reduce((av, cv) => av.concat(cv)).filter(v => v === 1).length * 4 - count * 2
};
