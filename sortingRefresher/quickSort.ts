function quickSort(arr: number[], left: number = 0, right: number = arr.length - 1): void {
  console.log('quickSort called with arr, left, right', arr, left, right);
  if (left < right) {
    console.log('quickSort calling partition with arr, left, right', arr, left, right);
    const partitionIndex = partition(arr, left, right);
    console.log('quickSort partition returned partition index', partitionIndex);
    console.log('quickSort calling quickSort with arr, left, partitionIndex - 1', arr, left, partitionIndex - 1);
    console.log('quickSort calling quickSort with arr, partitionIndex + 1, right', arr, partitionIndex + 1, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
}

function partition(arr: number[], left: number, right: number): number {
  console.log('partition called with arr, left, right', arr, left, right);
  const pivot = arr[right];
  console.log('partition pivot is', pivot);
  let partitionIndex = left;
  console.log('partition index is', partitionIndex);

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
const arr = [5, 3, 8, 4, 2];
quickSort(arr);
console.log(arr); // Output: [2, 3, 4, 5, 8]

