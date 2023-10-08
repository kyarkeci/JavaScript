function range(start,end){
let arr = [];
if(start <= end){
    for(let i = start; i<=end; i++){
        arr.push(i);
    }
}
return arr;
}
function ranges(start,end,step){
   let arr = [];
   if(start <= end){
    for(let i = start; i<=end; i+=step){
        arr.push(i);
    }

   }
   if(start >= end && step < 0){
    for(let i = start; i >= end; i+=step){
        arr.push(i);
    }
   }

return arr;
}

function sum(arr){
let sum = 0;
for(let i = 0; i < arr.length; i++){
sum+= arr[i];
}
console.log(sum);
}
console.log(ranges(1,10,2));