const sumRecursion = (arr: number[]): number => {
  return arr.length === 0 ? 0 : arr[0] + sumRecursion(arr.slice(1));
};

const arrayCount = (arr: number[]): number => {
  if (arr.length === 0) return 0;
  return 1 + arrayCount(arr.slice(1));
};

