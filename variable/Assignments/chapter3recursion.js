function isEven(positiveNumber){
if(positiveNumber != 1 && positiveNumber != 0){
    positiveNumber -= 2;
    return isEven(positiveNumber);
}if(positiveNumber == 0){
    return true;
}if(positiveNumber == 1){
    return false;
}
}
console.log(isEven(75));