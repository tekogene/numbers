function mergeArrays(left: number[], right: number[]): number[] {
  const result: number[] = [];
  const index = [0, 0];
  let merging = true;

  const merge = (l: number, r: number) => {
    const hasLeft = l !== undefined;
    const hasRight = r !== undefined;

    if (!hasLeft && !hasRight) {
      return (merging = false);
    }

    const pushLeft = (hasLeft && !hasRight) || l < r;

    result.push(pushLeft ? l : r);
    index[pushLeft ? 0 : 1] += 1;
  };

  while (merging) {
    merge(left[index[0]], right[index[1]]);
  }

  return result;
}

export function mergeSort(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }

  const centerIndex = Math.floor(arr.length / 2);

  const left = arr.slice(0, centerIndex),
    leftSorted = mergeSort(left);

  const right = arr.slice(centerIndex),
    rightSorted = mergeSort(right);

  return mergeArrays(leftSorted, rightSorted);
}
