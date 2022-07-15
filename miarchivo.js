const divisas=[
    {id: 1, nombre: "DOLAR"},
    {id: 2,nombre: "EURO"}
]; 
let arr1 = ["Dolar", "Euro"]; 
alert("Cotizador de divisas peso Argentino a Dolar US$/Euro €");
let tipoDeDivisa = prompt("Especifique con que divisa interactuara: " + arr1[0] + " o " + arr1[1]).toUpperCase();
while (tipoDeDivisa != "DOLAR" && tipoDeDivisa != "EURO") {
    alert("Debe ingresar con que tipo de divisa interactuara!");
    tipoDeDivisa = prompt("Especifique con que divisa interactuara: " + arr1[0] + " o " + arr1[1]).toUpperCase();
};

function pedirMonto() {
    let dineroMonto = parseFloat(prompt("Ingrese la cantidad de pesos argentinos los cuales va a calcular. Hagalo sin simbolos:"));
    while (isNaN(dineroMonto)) {
        alert("Debe ingresar el monto de pesos en numeros");
        dineroMonto = parseFloat(prompt("Especifique la cantidad de pesos argentinos sin ningun simbolo"));
    };
    return dineroMonto;
}

const dolar = divisas.find((el) => el.nombre === "DOLAR");
const euro = divisas.find((el) => el.nombre === "EURO");


if (tipoDeDivisa === dolar.nombre) {
    alert("Precio de compra: $235 Precio de venta: $238");

    var operacion = prompt("Indique la operacion a realizar: comprar o vender ").toLowerCase();
    while (operacion != "comprar" && operacion != "vender") {
        alert("Las operaciones posibles son comprar o vender");
        operacion = prompt("Especifique que acción llevara a cabo: comprar o vender").toLowerCase();
    };

    if (operacion === "comprar") {
        var resultadoCompra = pedirMonto() * 238;
        alert("La conversion en dolares seria de US$" + resultadoCompra + ".");
    } else if (operacion === "vender") {
        var resultadoVenta = pedirMonto() * 235;
        alert("La conversion en dolares seria de US$" + resultadoVenta + ".");
    }

} else if (tipoDeDivisa === euro.nombre) {
    alert("Precio de compra: $263 Precio de venta: $258");

    var operacion = prompt("Indique la operacion a realizar: comprar o vender ").toLowerCase();
    while (operacion != "comprar" && operacion != "vender") {
        alert("Las operaciones posibles son comprar o vender");
        operacion = prompt("Especifique que acción llevara a cabo: comprar o vender").toLowerCase();
    };

    if (operacion === "comprar") {
        var resultadoCompra = pedirMonto() * 263;
        alert("La conversion en euros seria de €" + resultadoCompra + ".");
    } else if (operacion === "vender") {
        var resultadoVenta = pedirMonto() * 258;
        alert("La conversion en euros seria de €" + resultadoVenta + ".");
    };

}; 