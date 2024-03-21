const sumRecursion = (arr: number[]): number => {
  return arr.length === 0 ? 0 : arr[0] + sumRecursion(arr.slice(1));
};

const arrayCount = (arr: number[]): number => {
  if (arr.length === 0) return 0;
  return 1 + arrayCount(arr.slice(1));
};

const maximumInArray = (arr: number[]): number => {
  if (arr.length === 2) {
    if (arr[0] > arr[1]) return arr[0];
    return arr[1];
  }
  let sub_max = maximumInArray(arr.slice(1));
  if (arr[0] > sub_max) return arr[0];
  return sub_max;
};

