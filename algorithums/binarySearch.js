function binarySearch(value, array, start, end) {
  if (start > end) {
    return false;
  }
  let midpoint = Math.floor((start + end) / 2);
  if (array[midpoint] === value) {
    return true;
  } else if (array[midpoint] > value) {
    return binarySearch(value, array, 0, midpoint - 1);
  } else {
    return binarySearch(value, array, midpoint + 1, end);
  }
}

const arr = [1, 3, 4, 6, 8, 9, 10, 12, 13, 14, 18, 19, 20];

console.log(binarySearch(5, arr, 0, arr.length - 1)); // false

console.log(binarySearch(19, arr, 0, arr.length - 1)); //true
