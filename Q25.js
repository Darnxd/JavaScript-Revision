function Array(arr){
let Sum = 0;
for(let i = 0 ; i < arr.length; i++){
Sum += arr[i];
}
return Sum;
}
let Number = [9,8,7,6,5,4];
console.log("Sum of Array : ",Array(Number));
