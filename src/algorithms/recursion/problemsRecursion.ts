const sumRecursion = (arr: number[]): number => {
  return arr.length === 0 ? 0 : arr[0] + sumRecursion(arr.slice(1));
};

