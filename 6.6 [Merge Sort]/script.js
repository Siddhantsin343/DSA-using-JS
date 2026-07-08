// Mergte Sort 

// leet code Question 912

// / there is 2 phase 
// 1. divide 
// 2. merge 



// Merge Sort is an efficient, comparison-based sorting algorithm that uses a Divide and Conquer strategy to sort arrays or lists. It works by recursively splitting an array in half until individual elements are left, and then merging those elements back together in sorted order

// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

 

// Example 1:

// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
// Example 2:

// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessarily unique.
 


let arr = [5,1,1,3,2,0]
var sortArray = function(arr) {
   if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);

    let left = sortArray(arr.slice(0, mid));
    let right = sortArray(arr.slice(mid));

    return merge(left, right);
};

function merge(left, right) {
    let res = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            res.push(left[i]);
            i++;
        } else {
            res.push(right[j]);
            j++;
        }
    }

    return [...res, ...left.slice(i), ...right.slice(j)];
}

let result = sortArray(arr)
console.log(result);
