// Loop in Loop

// Example
{
    for(let i=0; i<5; i++){
        for(let j=0; j<5; j = j+1){
            console.log(i , j)
            
        }
    }
}

console.log("Q2 ------------------------------------------")

// Q2. Example
{
    for(let i=0; i<3; i++){
        for(let j=0; j<i; j = j+1){
            console.log(i , j)
            
        }
    }
}


console.log("Q3 using <= ------------------------------------------")

// Q3. Example
{
    for(let i=0; i<3; i++){
        for(let j=0; j<=i; j = j+1){
            console.log(i , j)
            
        }
    }
}

console.log("Q4 using j=i ------------------------------------------")

// Q4. Example
{
    for(let i=0; i<3; i++){
        for(let j=i; j>0; j --){
            console.log(i , j)
            
        }
    }
}

console.log("Q5 using j=i , j>=0 ------------------------------------------")

// Q5. Example
{
    for(let i=0; i<3; i++){
        for(let j=i; j>=0; j --){
            console.log(i , j)
            
        }
    }
}

console.log("Q6 using j=i , j>=0 ------------------------------------------")

// Q5. Example
{
    for(let i=5; i>0; i--){
        for(let j=0; j<=i; j ++){
            console.log(i , j)
            
        }
    }
}

