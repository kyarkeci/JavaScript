function reverseAnArray(array){
let newArray = [];
for(let i = array.length-1; i >= 0; i--){
    newArray.push(array[i]);
}
console.log(newArray);
}

let array1 = [2,1,13,94,15];
reverseAnArray(array1);

function reverseArrayInPlace(array){
    let leftPointer = 0;
    let rightPointer = array.length-1;
while(leftPointer < rightPointer){
    let temp = array[leftPointer];
    array[leftPointer] = array[rightPointer];
    array[rightPointer] = temp;
    leftPointer++;
    rightPointer--;
}
console.log(array);
}
let array2 = [2,1,13,94,15];
reverseArrayInPlace(array2);