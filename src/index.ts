function mergeArrays(left: number[], right: number[]): number[] {
  const result = [],
    lLen = left.length,
    rLen = right.length;

  let l = 0,
    r = 0;

  while (l < lLen && r < rLen) {
    if (left[l] < right[r]) {
      result.push(left[l++]);
    } else {
      result.push(right[r++]);
    }
  }

  return result.concat(left.slice(l)).concat(right.slice(r));
}

export function mergeSort(arr: number[]): number[] {
  const len = arr.length;

  if (len < 2) {
    return arr;
  }

  const mid = Math.floor(len / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid);

  return mergeArrays(mergeSort(left), mergeSort(right));
}
