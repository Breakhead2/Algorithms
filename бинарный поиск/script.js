// сложность алгоритма O(log2(n))
function binarySearch(serachItem, sortArr) {
  let low = 0,
    high = sortArr.length - 1;
  let steps = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = sortArr[mid];

    if (guess === serachItem) return { index: mid, steps };
    if (guess < serachItem) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
    steps++;
  }

  return { index: -1, steps };
}

console.log(binarySearch(11, [2, 5, 7, 10, 22, 33, 34, 44, 55, 60, 71, 88]));
