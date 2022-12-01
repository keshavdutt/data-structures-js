let buckets = require('buckets-js');

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

function maxHeapCompare(a, b) {
  if (a[0] < b[0]) {
    return 1;
  }
  if (a[0] > b[0]) {
    return -1;
  }
  // a must be equal to b
  return 0;
}

let array = [1, 1, 1, 3, 2, 2, 4];
let k = 2;
// find the top k frequent number
// output

let minheap = buckets.Heap(Compare);

let kd = new Map();

array.forEach((value, index) => {
  if (!kd[value]) {
    kd[value] = 1;
  } else {
    kd[value] += 1;
  }
});

for (let key in kd) {
  let pair = [kd[key], key];
  minheap.add(pair);
  if (minheap.size() > k) {
    minheap.removeRoot();
  }
}

while (minheap.size() > 0) {
  console.log(minheap.removeRoot()[1]);
}
