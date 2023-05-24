/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

 // using dynamic programming
var uniquePathsWithObstacles = function(obstacleGrid) {
    // short circuit
    if(obstacleGrid[obstacleGrid.length-1][obstacleGrid[0].length-1] === 1) return 0;

    // add 0 padding
    console.log('obstacle grid', obstacleGrid);
    for(let i = 0; i < obstacleGrid.length; ++i) {
        obstacleGrid[i].push(0);
    }
    obstacleGrid.push(Array(obstacleGrid[0].length).fill(0));
    console.log('obstacle grid', obstacleGrid);

    let rows = obstacleGrid.length-2;
    let cols = obstacleGrid[0].length-2;
    obstacleGrid[rows][cols] = 1;

        // rows
        let j = cols-1;
        for(let i = rows; i >= 0; --i) {
            //columns
            for(; j >= 0; --j) {
                obstacleGrid[i][j] = obstacleGrid[i][j] === 1 ? 0 : obstacleGrid[i+1][j]+obstacleGrid[i][j+1];
            }
            j = cols

        }
        
    console.log('obstacleGrid', obstacleGrid);

    return obstacleGrid[0][0];
};