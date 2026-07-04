// Sum of all number in array

let arr = [5,3,2,0,1];

function sum(n){
    if(n == 0) return arr[0]
    return arr[n] + sum(n-1)

}
console.log(sum(arr.length -1)) 

{
    let arr = [5, 2, 0, 3, 6, 7];

function ssum(n) {
    let isOdd = (arr[n] % 2 != 0);

    if (n == 0) {
        if (isOdd) {
            return arr[n];
        } else {
            return 0;
        }
    }

    if (isOdd) {
        return arr[n] + ssum(n - 1);
    } else {
        return ssum(n - 1);
    }
}

console.log( "ODD ", ssum(arr.length - 1));
}