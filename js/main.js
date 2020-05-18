/*
var idade = prompt("Qual sua idade?");

if (idade >= 18) {
    alert('Maior de idade!')
} else {
    alert('Menor de idade')
};
*/

var d = new Date();
alert(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);

var count = 0;

while (count < 5) {
    console.log(count);
    count += 1;
};

console.log("\n");

for (let i = 0; i < 5; i++) {
    console.log(i);
};