var lista = ["maçã", "pera", "laranja"];

lista.push("uva");
console.log(lista);

lista.pop();
console.log(lista);

console.log(lista.length);

console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(", "));

var fruta = {
    nome: "maçã",
    cor: "vermelha"
}

// alert(fruta.nome);

var fruta_lista = [{
    nome: "maçã",
    cor: "vermelha"
}, {
    nome: "uva",
    cor: "roxa"
}]

console.log(fruta_lista);
alert(fruta_lista[1].nome);