// VARIABLES

let input = document.getElementById("inputImporte");
let convertionFrom = document.getElementById("convertionFrom"); 
let convertionTo = document.getElementById("convertionTo"); 
let convertionBtn = document.getElementById("botonConversion");
let swap = document.getElementById("swap"); 
let usd1 = document.getElementById("usd1");
let euro1 = document.getElementById("euro1");
let ars1 = document.getElementById("ars1");
let usd2 = document.getElementById("usd2");
let euro2 = document.getElementById("euro2");
let ars2 = document.getElementById("ars2");
let finalResult = document.getElementById("valorCotizado");

// EVENTOS

convertionBtn.addEventListener('click', convertion); 
convertionFrom.addEventListener('change', convertion); 
convertionTo.addEventListener('change', convertion); 
input.addEventListener('input', convertion); 
usd1.addEventListener('change', convertion);
euro1.addEventListener('change', convertion);
ars1.addEventListener('change', convertion);
usd2.addEventListener('change', convertion);
euro2.addEventListener('change', convertion);
ars2.addEventListener('change', convertion);
finalResult.addEventListener('change',convertion)

function convertion (){
    let dolar = 340; 
    let euro = 345; 
    let pesoArgentino = 1; 
    let resultado; 

    if (convertionFrom.value === ars1.value && convertionTo.value === usd2.value){
        resultado = document.getElementById("inputImporte").value * dolar;
        finalResult.innerHTML = resultado;
      }
       else if (convertionFrom.value === ars1.value && convertionTo.value=== euro2.value ){
        resultado = document.getElementById("inputImporte").value * euro;
        finalResult.innerHTML = resultado;
       }
         else if (convertionFrom.value === ars1.value && convertionTo.value === ars2.value){
          resultado = document.getElementById("inputImporte").value * pesoArgentino;
          finalResult.innerHTML = resultado;
        };}



 







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