var txtElement = document.querySelector("#trocar");
var txtElement2 = document.querySelector("#trocar2");
var selectElement = document.querySelector("select");

function clicou() {
    document.getElementById("congrats").innerHTML = "Obrigado por clicar!";
};

/*
function redirect() {
    window.open("https://www.google.com/");
    window.location.href = "https://www.google.com/";
};
*/

txtElement.onmouseover = () => {
    txtElement.innerHTML = "Passei o mouse";
};

txtElement.onmouseout = () => {
    txtElement.innerHTML = "Saindo";
};

txtElement2.onmouseover = () => {
    txtElement2.innerHTML = "Passei o mouse";
};

txtElement2.onmouseout = () => {
    txtElement2.innerHTML = "Saindo";
};

selectElement.onchange = () => {
    console.log(selectElement.value);
};