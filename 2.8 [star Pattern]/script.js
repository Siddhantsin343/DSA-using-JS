// Star Pattern 

//  Q1.  create a 4x4 matrix.
{
    let n = 4;

    for(let i=0; i<n;i++){
        let row = " "
        for(let j=0; j<10 ; j++){
            row = row + " * "
        }
        console.log(row);
        
    }   
}

console.log("------------------------------------------------------------")

// Q2. create a 1-5 
{
    let n = 4
    for(let i=0; i<n ; i++){
        let row = " "
        for(let j=0 ; j < i+1 ; j++){
            row = row + "*"
        }
        console.log(row);
        
    }
}


console.log("------------------------------------------------------------")

// Q3. PRINT 1-5 number 
{
    let n = 5
    for(let i=0; i<n;i++){
        let row = ""
        for(let j=0 ; j<=i; j++){
            row = row + (j+1)
        }
        console.log(row);
        
    }
}


console.log("------------------------------------------------------------")

// Q4. PRINT 1-5 number in order 
{
    let n = 5
    for(let i=0; i<n;i++){
        let row = ""
        for(let j=0 ; j<=i; j++){
            row = row + (i+1)
        }
        console.log(row);
        
    }
}

console.log("------------------------------------------------------------")

// Q5. PRINT 5-1 reverse in order 
{
    let n = 5
    for(let i=0; i<n;i++){
        let row = ""
        for(let j=0 ; j<n-i; j++){
            row = row + (j+1)
        }
        console.log(row);
        
    }
}

console.log("------------------------------------------------------------")

// Q6. PRINT 5-1 star reverse in order 
{
    let n = 5
    for(let i=0; i<n;i++){
        let row = ""
        for(let j=0 ; j<n-i; j++){
            row = row + "*"
        }
        console.log(row);
        
    }
}

console.log("------------------------------------------------------------")


// Q7. PRINT 5-1 new reverse order pattern
{
    let n = 5
    for(let i=0; i<n;i++){
        let row = ""
        for(let j=0 ; j<n-(i+1); j++){
            row = row + "_"
        }
        for(let k=0; k<i+1; k++){
            row = row + "*"
        }
        console.log(row);
        
    }
}


console.log("------------------------------------------------------------")


// Q8. PRINT 1,0  switch order pattern
{
    let n = 5
    let toggle = 1
    for(let i=0; i<n; i++){
        let row = ""
        for(let j=0; j<=i; j++){
            row = row + toggle
            if(toggle == 1){
                toggle = 0
            }else{
                toggle = 1
            }
        }
        console.log(row);
        
    }
}