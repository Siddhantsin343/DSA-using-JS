// Reverse String Leetcode Q: 344

// input = ["h","e","l","l", "o"] 
// output = ["h","e","l","l", "o"] 
// inplace

// formula : swap (n-1-i)


let s = ["h","e","l","l", "o"]

function reverseSting(s){

  let length = s.length
  let lenHalf = Math.floor(length / 2)

  for(let i=0; i<lenHalf; i++){
    let temp = s[i]
    s[i] = s[lenHalf-1-i]
    s[lenHalf-1-i] = temp
}

}
console.log(reverseSting(s));
