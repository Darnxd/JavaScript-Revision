let arr = [1,2,3,4];

let sum = arr.reduce(function(total, num){
  return total + num;
}, 0);

console.log(sum);
