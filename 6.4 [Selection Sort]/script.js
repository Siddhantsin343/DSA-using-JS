// Selection sort 
// Selection sort is a simple comparison-based sorting algorithm. It works by repeatedly selecting the smallest (or largest, depending on the sorting order) element from the unsorted portion of the list and moving it to the beginning of the list. This process continues until the entire list is sorted.

// How Selection Sort Works

// Initialization: Start with the first element of the list and assume it is the minimum.

// Comparison: Compare this minimum element with the next element in the list. If the next element is smaller, update the minimum.

// Swapping: After finding the minimum element in the unsorted portion, swap it with the first unsorted element.

// Iteration: Move to the next element and repeat the process until the entire list is sorted.

// Here is a step-by-step example:

// Consider the array: [64, 25, 12, 22, 11]

// First iteration: Find the smallest element (11) and swap it with the first element. The array becomes [11, 25, 12, 22, 64].

// Second iteration: Find the next smallest element (12) and swap it with the second element. The array becomes [11, 12, 25, 22, 64].

// Continue this process until the array is sorted.


let arr = [7,1,5,4,3,2]

function selectSort(a){
    let n = a.length

    for(let i=0; i<n-1; i++){
        // console.log(a[i]);
        let min = i;
        for(let j=i; j<n ; j++){
            if(a[j]< a[min]){
                min = j
            }
        }
        let temp = a[i];
        a[i]= a[min]
        a[min]=temp
    }
     return arr
}

let result = selectSort(arr)
console.log(result);
