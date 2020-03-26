# CONCEPTOS BÁSICOS JS - BLOQUE 1

## Variables Let y Var
- Let: actúa a nivel de bloque
- Var: actúa a nivel global

```js
var numero = 40;
console.log(numero); //aparecerá 40

if(true){
    let numero = 50;
    console.log(numero); //aparecerá 50
}

console.log(numero) //aparecerá 40

```

## Constantes
Son como una variable, pero su valor no puede cambiar

```js
    var web = "http://tanicacaceres.com";
    const ip = "192.168.10.123";

    ip = "10.0.0.10"; //mal porque no se puede modificar una constante

```

## Tipos de datos

### Operadores

```js
var num1 = 2;
var num2 = 3;
var operacion = num1 + num2;

console.log("El resultado es" + operacion);
```

## Tipos de datos
```js
var numero_entero = 4;

console.log(String(numero_entero+4)); //nos convierte ese resultado en un string.
```

## TYPEOF

```js
console.log(typeof(num1)) //nos devuelve el tipo de dato
```

## Bucles

### while

```js
var year = 2020;

while (year <= 2050){
    console.log("Estamos en el año " + year);
    year++;
}
```

### do while

```js
var years = 30;

do{
    alert("visualiza si es mayor de 25");
    years--;
}while(years >= 25)
```

### Break
```js
var year = 2020;

while(year != 1999){
    console.log("Estamos en el año " + year);

    if(year === 2000){
        break;
    }

    year--;
}
```

## Alertas y ventanas de ingreso de datos

### Confirmación

```js
var resultado = confirm("¿Estas seguro que deseas continuar?"); //aparece un alert que nos permite darle a un botón "Aceptar" o "Rechazar"
console.log(resultado) //devuelve true o false
```

### Ingreso de datos
```js
var resultado = prompt("¿Qué edad tienes?", 25);
console.log(resultado) //nos devuelve un String, pero podemos pasarlo a numerico si lo deseamos con "parseint"
```

# CONCEPTOS BÁSICOS JS - BLOQUE 2

## Parámetros REST y SPREAD

### REST
```js
function listadoFrutas(fruta1, fruta2, ...restoFrutas){
    console.log("Fruta 1:", fruta1);
    console.log("Fruta 2:", fruta2);
    console.log(restoFrutas);
}

listadoFrutas("naranja", "melon", "sandia", "manzana", "mandarina");
```
### SPREAD
```js
var frutas = ["naranja", "manzana"];
listadoFrutas(...frutas, "sandiam", "melon", "cocos"); //hay que ponerle los ... para que me coja como Fruta1 la "naranja" y fruta2 la "manzana", ya que si no me cogería el array entero.
```


## Funciones anónimas
Es una función que no tiene nombre
```js
function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){

    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);
}

//-------//

sumame(5,4, function(dato){
    console.log("La suma es: ", dato);
},
function(dato){
    console.log("La suma por dos es: ", (dato*2));
});
```

## Funciones flecha
```js
sumame(5,4, dato => {
    console.log("La suma es: ", dato);
},
dato => {
    console.log("La suma por dos es: ", (dato*2));
});
```

## Plantillas de texto en JavaScript
```js
var nombre = prompt("Introduce nombre");
var apellido = prompt("Introduce apellido");

var texto = `
    <h1>DATOS</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mi apellido es: ${apellido}</h3>
`;

document.write(texto);
```

## Arrays

### forEach
Sin sacar índices:
```js
miArray.forEach((elemento)=>{
    document.write("<li>"+elemento+"</li>");
})
```
Sacando índices:
```js
miArray.forEach((elemento, indice)=>{
    document.write("<li>"+indice+ "-" +elemento+"</li>");
})
```

### Push
Mete elementos a un array
```js
peliculas = ["Batman", "Interstellar", "Pocahontas"];
peliculas.push("Origen");
//peliculas = ["Batman", "Interstellar", "Pocahontas", "Origen"];
```
### Pop
Elimina el último elemento de un array
```js
//peliculas = ["Batman", "Interstellar", "Pocahontas", "Origen"];
peliculas.pop();
//peliculas = ["Batman", "Interstellar", "Pocahontas"];
```

### Splice
Elimina un elemento en concreto del array
```js
var indice = peliculas.indexOf("Interstellar"); //saca el número de indice de esa película en el array "peliculas"

if (indice > -1){
    peliculas.splice(indice, 1) //Cuanto indices quiero borrar a partir de ese, 1.
}
```

### Join
Pasa a cadena separada por comas un array
```js
var peliculas_string = peliculas.join(); //es necesario meterlo en una variable
console.log(peliculas_string);
//"Batman, Pocahontas"
```

### Split
Convertir cadena a array
```js
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");

//cadena_array = ["texto1", "texto2", "texto3"];
```

## Ordenar arrays
### Sort
Ordenar alfabéticamente/numéricamente
```js
peliculas.sort();
```
### Reverse
Ordena a la inversa el array
```js
peliculas.reverse();
```

## Recorrer arrays
### forIn
Recorrer por índice:
```js
for(let indice in peliculas){
    document.write("<li>" + peliculas[indice] + "</li>");
}
```
## Búsqueda en un array
### Find
Buscar por elemento del array
```js
var busqueda = peliculas.find(function(peli){
    return peli == "Batman";
})
```
Con función flecha
```js
var busqueda = peliculas.find(peli => peli == "Batman";)
//busqueda = "Batman"
```
### FindIndex
Buscar por índice del array
```js
var busqueda = peliculas.findIndex(peli => peli == "Batman";)
//busqueda = 1
```

### Some
Buscar con elemento numérico
```js
var precios = [10,20,30,40,50];

var busqueda = precios.some(precio => precio >= 10;)
//busqueda = true

var busqueda = precios.some(precio => precio >= 100;)
//busqueda = false
```

> Ejercicio: Ejercicios\ejercicioArrayBloque2.js


