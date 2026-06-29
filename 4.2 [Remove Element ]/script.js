// remove element 27 leetcode question 

let nums = [0,0,1,2,3,8,8,3,4,5,7]
let val = 3


function removeElement(nums, val){
    let x =0;
    for(let i=0; i< nums.length; i++){
        if(nums[i] != val){
            nums[x] = nums[i]
            x = x +1 
        }
    }
    return x
}


console.log(removeElement(nums, val))