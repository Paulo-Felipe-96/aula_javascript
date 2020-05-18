function soma(n1, n2){
    return n1 + n2;
}

console.log(soma(10, 20));

function validaIdade(idade){
    return idade >= 18 ? true:false
};

var idade = prompt("Sua idade: ");
console.log(validaIdade(idade));