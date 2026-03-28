const readline = require("readline");

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question( function(n) {
n = parseInt(n);   

for (let i = 1; i <= n; i++) {
let pattern = "";
for (let j = 1; j <= i; j++) {
pattern += "*";
}
console.log(pattern);
}
rl.close();
});

