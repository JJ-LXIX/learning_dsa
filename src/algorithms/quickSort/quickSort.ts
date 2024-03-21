const quickSort = (arr: number[]): any => {
  if (arr.length < 2) return arr;

  let pivot = arr[Math.floor(arr.length / 2)];

  let low = [];
  let high = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === pivot) continue;
    arr[i] < pivot ? low.push(arr[i]) : high.push(arr[i]);
  }

  return [...quickSort(low), pivot, ...quickSort(high)];
};

export default quickSort;
