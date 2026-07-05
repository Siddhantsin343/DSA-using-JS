// Linear Search 
// warm up . 

let arr = [10,3,56,1,7,5,9,0]

function LinearSearch(arr, tar){
    for(let i=0; i<arr.length; i++){
        if(arr[i]== tar){
            return i
        }
    }
    return -1
}
LinearSearch(arr, )