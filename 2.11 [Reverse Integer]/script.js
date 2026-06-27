// given a single 32-bit integer x, return x with its digits reversed. if reversing x causes the value to go outside the single 32-bit ineteger range

// let n = 123

function reverse(x){
let xCopy = x
x = Math.abs(x)

let rev = 0
while(x>0){
    let last = x%10
    rev = (rev*10) + last
    x =Math.floor(x /10)
}

let limit = Math.pow(2,31)
if(rev < -limit || rev > limit) return 0
    return (xCopy< 0) ? - rev : rev
}

let ans = reverse(-123)
console.log(ans);
