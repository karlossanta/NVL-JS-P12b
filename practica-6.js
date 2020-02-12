//Función para comprobar si un número es par
function esPar(n) {
    return(n % 2 === 0);
}

//Función para generar un número alearorio entre 'inicio' y 'fin'
function numeroAleatorio(inicio, fin) {
    return Math.floor((Math.random() * fin) + inicio);
}

//Función para generar 'n' números aleatorios
function generarAleatorios(n) {
    var numeros = [];
    for(i = 0; i < n; i++) {
        var numero = numeroAleatorio(1, 100)
        numeros.push(numero);
    }
    return numeros;
}

//cantidad de números a generar
var n = 50;

var impares = [];
var pares = [];

//numeros aleatorios generados
var numeros = generarAleatorios(n)

//Dividimos los números en pares e impares
for(i = 0; i < numeros.length; i++) {
    var numero = numeros[i];
    if (esPar(numero)) {
        pares.push(numero)
    } else {
        impares.push(numero)
    }
}

console.log(impares);
console.log(pares);