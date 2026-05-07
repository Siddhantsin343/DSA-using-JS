// find a second largest number in am array 

let arr = [4, 9, 0, 2, 8, 7, 1]

function secondLargest(arr){
    let largest = -Infinity
    let smallest = -Infinity

    for(let i=0; i<arr.length; i++){
        if(arr[i]>largest){
            smallest = largest
            largest = arr[i]
        }
        else if(arr[i] > smallest){
            smallest = arr[i]
        }
    }
    return smallest
}   

let answer = secondLargest(arr)
console.log(answer);
