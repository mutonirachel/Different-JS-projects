// Arithmetic Operations

function add(x,y){
    return x+y;
}
function multi(x,y){
    return x*y;
}
function subtract(x,y){
    return x-y;
}
function division(x,y){
    return x/y;
}
function modulus(x,y){
    return x%y;
}
function arithmeticOperations(operations,num1,num2){
    return operations(num1,num2);
}
console.log("The Additon is ",arithmeticOperations(add, 12, 20));
console.log("The Subtraction is ",arithmeticOperations(subtract, 30, 100));
console.log("The Multiplication is ",arithmeticOperations(multi, 20, 8));
console.log("The Division is ",arithmeticOperations(division, 53, 8));
console.log("The Remainder is ",arithmeticOperations(modulus, 11, 8));