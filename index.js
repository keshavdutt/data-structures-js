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

let newheap = buckets.Heap(reverseCompare);
// let array = [7, 10, 4, 3, 20, 15];
let array = [7, 10, 4, 3, 20, 20, 15];

let k = 3;
let size = array.length;

// for (let i = 0; i < size; i++) {
//   newheap.add(array[i]);
//   if (newheap.size() > k) {
//     newheap.removeRoot();
//   }
// }

for (let i = 0; i < size; i++) {
  newheap.add(array[i]);
  // if (newheap.size() > k) {
  //   newheap.removeRoot();
  // }
}

console.log(newheap.toArray());
console.log(newheap.removeRoot());
console.log(newheap.toArray());
console.log(newheap.removeRoot());
console.log(newheap.removeRoot());
console.log(newheap.removeRoot());
console.log(newheap.removeRoot());
console.log(newheap.removeRoot());
console.log(newheap.removeRoot());
console.log(newheap.toArray());
