const binarySearch = (arr: number[], num: number): string => {
  let low = 0;
  let high = arr.length - 1;
  let mid;
  while (low <= high) {
    mid = Math.floor((high + low) / 2);
    if (arr[mid] === num) return `number is found at position ${mid + 1}`;
    arr[mid] > num ? (high = mid - 1) : (low = mid + 1);
  }
  return "number not found";
};

export default binarySearch;
