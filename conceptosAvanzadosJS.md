# CONCEPTOS AVANZADOS JS - BLOQUE 1

## DOM
Document Object Mode: Son todos los elementos que hay dentro de una página web
## BOM
Browser Object Mode: Nos permite manipular la ventana y el navegador

## Document Object

Objeto | Función que realiza
-- | --
document.getElementById("id") | obtiene el elemento entero
document.getElementById("id").innerHTML | obtiene el valor del elemento
document.getElementById("id").value | obtiene el valor del elemento
document.querySelector("#id") | selecciona de forma global, ya sea id, class...
var variable.innerHTML = "Hola" | le asigna el valor "Hola" a dicha variable
var variable.class = "hola" | le añadimos la clase "hola"
var variable.className = "adios" | le modificamos la clase a "adios"
var variable.style.elemento(background, padding,...) |le modificamos el estilo a la variable


### Conseguir elementos por su etiqueta
```js
var todosLosDivs = document.getElementsByTagName('div');
//todosLosDivs -> contiene un array con todos los divs de la página
```
Ejemplo de modificar los divs
```js
//Sacamos el texto del que se posiciona en 2
var contenidoDiv = todosLosDivs[2].innerHTML;

//Le asignamos otro valor al texto
contenidoDiv.innerHTML = "Nuevo texto";


//Metemos los valores de los divs en <p>s
for(valor in todosLosDivs){

    //si el valor del dicho div es de tipo String se añade al párrafo
    if(typeof todosLosDivs[valor].textContent == 'string'){
        //creamos un elemento de tipo <p>
        var parrafo = document.createElement("p") 

        //cogemos el valor del div
        var texto = document.createTextNode(todosLosDivs[valor].textContent) 
    
        parrafo.appendChild(texto) //metemos el texto dentro del párrafo

        //metemos el párrafo en un contenedor
        document.querySelector("#contenedor").appendChild(parrafo);
    }
}
```

Añadir elementos a un **document.createElement**
- variable.appendChild(valor)
- variable.append(valor) : añade después
- variable.prepend(valor) : añade antes

### Conseguir elementos por su clase CSS
