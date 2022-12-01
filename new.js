var buckets = require('buckets-js');

function Compare(a, b) {
  if (a[0] < b[0]) {
    return -1;
  }
  if (a[0] > b[0]) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

// let a = [1, 2];
// let b = [3, 5];

// console.log(compare(a, b));

let newheap = buckets.Heap(Compare);
let array = [
  [9, 3],
  [2, 5],
  [3, 7],
  [2, 6],
  [7, 8],
];

let size = array.length;

for (let i = 0; i < size; i++) {
  newheap.add(array[i]);
  if (newheap.size() > k) {
    newheap.removeRoot();
  }
}

// for (let i = 0; i < size; i++) {
//   newheap.add(array[i]);
// }

console.log(newheap.toArray());

// console.log(newheap.toArray());
// console.log(newheap.removeRoot());
// console.log(newheap.toArray());
// console.log(newheap.removeRoot());
// console.log(newheap.removeRoot());
// console.log(newheap.removeRoot());
// console.log(newheap.toArray());
