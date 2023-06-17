/*
* Complete the 'flippingMatrix' function below.
*
* The function is expected to return an INTEGER.
* The function accepts 2D_INTEGER_ARRAY matrix as parameter.
*/
function flippingMatrix(matrix: number[][]): number {
 // Write your code here
 console.log('matrix', matrix);
 let n = matrix.length/2;

 let sum: number = 0;
   for(let i = 0; i < n; i++) {
     for(let j = 0; j < n; j++) {
       let right = 2*n - 1 - i;
       let down = 2*n -1 -j;
       console.log('considering');
       console.log(matrix[i][j]);
       console.log(matrix[right][j]);
       console.log(matrix[i][down]);
       console.log(matrix[right][down]);
       let max = Math.max(
           matrix[i][j], 
           matrix[right][j],
           matrix[i][down], 
           matrix[right][down]);
           console.log('adding', max);
           sum += max;
     }
   }
 return sum;
}
