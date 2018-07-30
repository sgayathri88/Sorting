function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    sort(arr, i, i+1);
    console.log('inside the bubblesort function');
    console.log(arr, i, i+1);
  }
  return arr;
}

function sort(arr, index1, index2) {
  //doesn't return anything, just modifies array
  if (arr[index1] > arr[index2]) {
    const tempVal = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tempVal;
  }
  console.log('inside the sort function');
  console.log(arr, index1, index2);
}
