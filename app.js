// arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9]
// k = 2

var buckets = require('buckets-js');

function reverseCompare(a, b) {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
  // a must be equal to b
  return 0;
}

function Compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

let newheap = buckets.Heap(Compare);
let arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9];
let k = 2;
let size = arr.length;
console.log(size);
let finalArray = [];

for (let i = 0; i < size; i++) {
  newheap.add(arr[i]);
  if (newheap.size() > k) {
    finalArray.push(newheap.removeRoot());
  }
}

while (newheap.size() > 0) {
  finalArray.push(newheap.removeRoot());
}

console.log(finalArray);
