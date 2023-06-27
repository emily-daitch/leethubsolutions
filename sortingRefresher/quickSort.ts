function quickSort(arr: number[], left: number = 0, right: number = arr.length - 1): void {
  console.log('quickSort called with arr, left, right', arr, left, right);
  if (left < right) {
    //console.log('quickSort calling partition with arr, left, right', arr, left, right);
    const partitionIndex = partition(arr, left, right);
    console.log('quickSort partition returned partition index', partitionIndex);
    //console.log('quickSort calling quickSort with arr, left, partitionIndex - 1', arr, left, partitionIndex - 1);
    //console.log('quickSort calling quickSort with arr, partitionIndex + 1, right', arr, partitionIndex + 1, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
}

function choosePivot(arr: number[], left: number, right: number): number {
  const mid = Math.floor((left + right) / 2);
  const values = [arr[left], arr[mid], arr[right]];
  values.sort((a, b) => a - b);
  return values[1]; // Return the median value
}

function partition(arr: number[], left: number, right: number): number {
  console.log('partition called with arr, left, right', arr, left, right);
  
  //median of three
  const pivot = choosePivot(arr, left, right); // Use the choosePivot function to select the pivot
  let pivotI = 0;
  let mid = Math.floor((left + right) / 2);
  if(pivot === arr[left]) pivotI = left;
  else if(pivot === arr[mid]) pivotI = mid;
  else pivotI = right;
  swap(arr, pivotI, right); // Swap the chosen pivot with the rightmost element

  //const pivot = arr[right];
  //console.log('partition pivot is', pivot);
  let partitionIndex = left;
  //console.log('partition index is', partitionIndex);

  for (let i = left; i < right; i++) {
    console.log('partition i is', i);

    if (arr[i] < pivot) {
      console.log('partition arr[i] < pivot, swapping i, partitionIndex', i, partitionIndex);

      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }

  console.log('partition swapping arr, paritionIndex, right', arr, partitionIndex, right);

  swap(arr, partitionIndex, right);
  return partitionIndex;
}

function swap(arr: number[], i: number, j: number): void {
  const temp = arr[i];
  console.log('swapping', arr[i], arr[j]);
  arr[i] = arr[j];
  arr[j] = temp;
}

// Example usage:
const arr = [5, 3, 8, 4, 2, 1, 2, 3, 4, 5, 4, 3, 12, 13, 15, 11, 20, 23, 0, -1, -3, 45, 3];
quickSort(arr);
console.log(arr);

