const partition = (arr: number[], low: number, high: number): number => {
  const pivot = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }
    while (arr[j] > pivot && j >= low + 1) {
      j--;
    }
    if (i < j) [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  [arr[low], arr[j]] = [arr[j], arr[low]];

  return j;
};

const qs = (arr: number[], low: number, high: number): void => {
  if (low >= high) return;

  const pivotIndex = partition(arr, low, high);

  qs(arr, low, pivotIndex - 1);
  qs(arr, pivotIndex + 1, high);
};

const quickSort = (arr: number[]): number[] => {
  qs(arr, 0, arr.length - 1);
  return arr;
};

export default quickSort;
