// print numbers without using loops
function myFunction(n){
    if(n>0){
        myFunction(n-1);
        console.log(n);
    }
}
myFunction(10);
