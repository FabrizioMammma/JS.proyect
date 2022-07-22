let input = document.getElementById("inputImporte"); 
let optionUsd1 = document.getElementById("usd1"); 
let optionEuro1 = document.getElementById("euro1"); 
let optionArs1 = document.getElementById("ars1"); 
let optionUsd2 = document.getElementById("usd2"); 
let optionEuro2 = document.getElementById("euro2"); 
let optionArs2 = document.getElementById("ars2");
let convertion = document.getElementById("botonConversion"); 
let swap = document.getElementById("swap");
let convertionFrom = document.getElementById("convertionFrom"); 
let convertionTo = document.getElementById("convertionTo"); 

convertion.addEventListener("click", () => {
    input = input.value;
    convertionFrom = convertionFrom.value;
    convertionTo = convertionTo.value; 
});








/* if (tipoDeDivisa === "DOLAR"){ 
    
    var resultadoCompra = pedirMonto() * 238;
    
} else if (tipoDeDivisa === "EURO") {
    
    var resultadoCompra = pedirMonto() * 263;
    
};  */


/* divisas.forEach(el => {
    alert(el.nombre)}
); 
var tipoDeDivisa = prompt("Especifique con que divisa interactuara:").toUpperCase(); 

while (tipoDeDivisa != "DOLAR" && tipoDeDivisa != "EURO") {
    alert("Debe ingresar con que tipo de divisa interactuara!");
    divisas.forEach(el => {
        alert(el.nombre)}
    ); 
    var tipoDeDivisa = prompt("Especifique con que divisa interactuara:").toUpperCase();
};

function pedirMonto() {
    let dineroMonto = parseFloat(prompt("Ingrese la cantidad de pesos argentinos los cuales va a calcular. Hagalo sin simbolos:"));
    while (isNaN(dineroMonto)) {
        alert("Debe ingresar el monto de pesos en numeros");
        dineroMonto = parseFloat(prompt("Especifique la cantidad de pesos argentinos sin ningun simbolo"));
    };
    return dineroMonto;
} */