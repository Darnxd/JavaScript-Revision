function Unique(arr){
let uniqueArr = [];
for(let i = 0; i < arr.length; i++){
if(!uniqueArr.includes(arr[i])){
uniqueArr.push(arr[i]);
}
}
return uniqueArr;
}
console.log(Unique([9,8,7,6,5,4,3,2,1,0]));

