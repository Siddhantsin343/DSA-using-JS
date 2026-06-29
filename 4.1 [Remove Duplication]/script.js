// Leetcode 26  remove duplication from sorted array

let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

function removeDuplicate(num) {
  let x = 0;
  for (let i = 0; i < num.length; i++) {
    // console.log(arr);

    if (num[i] > num[x]) {
      x = x + 1;
      num[x] = num[i];
    }
  }
  return x + 1;
}

console.log(removeDuplicate(arr));
