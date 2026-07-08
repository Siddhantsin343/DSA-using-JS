// Insertion sort

// Insertion sort is a simple, in-place algorithm that builds a sorted array one element at a time. It works exactly like sorting a hand of playing cards: you take one card from the unsorted pile, compare it to the sorted cards, and insert it into its correct position.

let arr =[7,4,2,5,1,2];

function insertionSort(a){
    let n = a.length;
    for(let i=1; i<n; i++){
        let curr = a[i]
        let prev = i-1
        while(a[prev]> curr && prev >=0){
            a[prev+1] = a[prev]
            prev --;
        }   
        a[prev+1] =curr
    }
    return arr;
} 

let reult = insertionSort(arr)
console.log(reult);
