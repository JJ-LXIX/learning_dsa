const quickSort = (arr: number[]): number[] => {
  if (arr.length < 2) return arr;

  let pivot = arr[Math.floor(arr.length / 2)];
  let low = arr.filter((e) => e < pivot);
  let high = arr.filter((e) => e > pivot);

  return [...quickSort(low), pivot, ...quickSort(high)];
};

export default quickSort;
