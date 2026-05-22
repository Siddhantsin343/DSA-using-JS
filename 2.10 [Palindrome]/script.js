// given an integer x , return True if x is palindrome and falseotherwise
let x = 121

function isPalindrome(x){

    if(x< 0) return false
    let xCopy = x
    let rev = 0

    while(x > 0){
        let remain = x % 10
        rev = (10 * rev) + remain
         x = Math.floor(x /10)
    }

    if(rev === xCopy){
        return true
    }else{
        return false
    }
}

console.log(isPalindrome(x));
