// day two timed test
function maximumSum(matrix) {
  const endIndex = matrix.length - 1;
  const halfIndex = matrix.length / 2; // Assuming the side length is an even number
  let runningSum = 0;

  for (let i = 1; i <= halfIndex; i++) {
    for (let j = 1; j <= halfIndex; j++) {
      const maxSum = Math.max(
        matrix[i - 1][endIndex-j+1],
        matrix[endIndex-i+1][j - 1],
        matrix[i - 1][j - 1]
      );
	
      runningSum += maxSum;
    }
  }

  return runningSum;
}

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

const maxSum = maximumSum(matrix);
console.log(maxSum); // Output: 34
