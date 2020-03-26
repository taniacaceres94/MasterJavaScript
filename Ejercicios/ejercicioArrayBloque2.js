
//Pida 6 numeros por pantalla y los meta en un array

//var arrayNumeros = new Array(6);
var arrayNumeros = [];
for(let i = 0; i <=5; i++){
    //arrayNumeros[i] = parseInt(prompt("Introduce número " + (i+1)));
    arrayNumeros.push(parseInt(prompt("Introduce número " + (i+1))));
} 

//mostrar el array entero en el cuerpo de la página y en la consola:
console.log(arrayNumeros);
document.write("Array<br>");
arrayNumeros.forEach(element => {
    document.write(element + "<br>");
});

//Ordenarlo y mostrarlo

arrayNumeros.sort();
document.write("Array ordenado<br>");
arrayNumeros.forEach(element => {
    document.write(element + "<br>");
});

//Invertir orden y mostrar
arrayNumeros.reverse();
document.write("Array invertido<br>");
arrayNumeros.forEach(element => {
    document.write(element + "<br>");
});

//mostrar número de elementos de un array
var numElementos = arrayNumeros.length;
document.write("Número de elementos<br>");
document.write(numElementos);

//buscar un valor introducido por el usuario, que nos diga si encuenta dicho valor y sun indice
//en el array

var busqueda = parseInt(prompt("Busca un número"));

var posicion = arrayNumeros.findIndex(numero => numero == busqueda);

if(posicion && posicion != -1){
    document.write("<h1>ENCONTRADO</h1>");
    document.write("<h3>Posición de la búsqueda; " + posicion + "</h3>");
}else{
    document.write("<h1>NO ENCONTRADO</h1>");
}

