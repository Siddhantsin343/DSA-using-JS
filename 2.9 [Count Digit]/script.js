// write a function that return the count of digits in anumber

function CountNumber (num){
    // math.abs is convort neg number to positive
    num = Math.abs(num)
    let count = 0;
    if(num == 0) return 1;

    while(num >0){
        num = Math.floor(num /10)
        count ++
    }
    return count
}

console.log(CountNumber(-11));
