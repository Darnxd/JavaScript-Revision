const prompt = require("prompt-sync")();
let a = Number(prompt());
if(a % 2 === 0){
console.log("Even");
}
else{
console.log("Odd");
}
