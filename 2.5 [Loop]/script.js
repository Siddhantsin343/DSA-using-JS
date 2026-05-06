// write a function that search for an array element in an array and return the index. if the element is not present then just return -1

let arr = [4, 2, 0, 10, 8, 30];

function search(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      return i;
    }
  }
  return -1;
}

let ans = search(arr, 10);
console.log(ans);
 

// write a function tha return the number of negative number in an array.
{
    let arr = [2, -3, 17, 0, 1, -10, -4, 8]
    function negativeCount(arr){
        count = 0
        for(let i=0; i<arr.length; i++){
            if(arr[i] <0 ){
                count = count + 1
            }
        }
        return count
    }

    let ans = negativeCount(arr)
    console.log(ans);
    
}

// write a  function that return the largest number in array
{
    let arr = [5, 0, 10, 8, 17, 1]
    
    function largestNum (arr){
        let largest = -Infinity
        for(let i=0 ; i<arr.length; i++){
            if(arr[i]> largest){
                largest = arr[i]
            }
        }
        return largest
    }
    let ans = largestNum(arr)
    console.log(ans);
    
}