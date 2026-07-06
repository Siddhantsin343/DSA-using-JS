// Binary search

// leetcode question : 704




let arr = [-1,0,1,4,6,8,12,34]

function search (arr, tar){
    let left =0
    let right = arr.length -1

    while(right>=left){
        let middle = Math.floor((right + left)/ 2)

        if(tar=== arr[middle]){
            return middle;
        }
        else if(tar < arr[middle]){
            right = middle -1
        }
        else{
            left = middle + 1
        }
    }

    return -1
}

console.log("at index : ", search(arr,12)); // this will return a index val of target value.
