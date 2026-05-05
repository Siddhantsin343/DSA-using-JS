// Loops : using for , while

// print hello World 20 time using for loop

for(let i=0; i<20;i++){
    console.log("hello World");
    
}

for(let a=3; a<5;a++){
    console.log("hello World", a);
    
}


{
    for(let i=2; i<9; i=i+2){
    console.log("hello World");
    
}

}


// greater then 
{
    for(let i=5 ; i>0 ; i= i-1){
    console.log("hello World");
    
}
}

//  
{
    for(let i=5 ; i<4 ; i= i+1 ){
    console.log("hello World");
    
}
}

// Infinity loop 
{
//     for(let i=1 ; i>0 ; i++){
//     // console.log("hello World");
    
// }
}

// how does function work inside loop
{function greet(){
    console.log("namaste!");
    
}
for(let i=0 ; i<5; i++){
    greet()
}}


// how does array work inside loop
{
    let arr = [10, 6, 2, 0, 8, 3, 80 ]
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
        
    }
}

// print only even number inside array
{
    let arr = [10, 6, 2, 0, 8, 3, 80]
    for(let i=0 ; i<arr.length; i++){
        if(arr[i] %2 == 0){
            console.log(arr[i]);
            
        }
    }
}