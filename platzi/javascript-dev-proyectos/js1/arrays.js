

var frutas = ["Manzana", "Pera", "Banana", "Uvas"];

console.log(frutas); //lanza todo el contenido
console.log(frutas.length); //muestra la cantidad de strings en el array
console.log(frutas[0]); //muestra el string/elemento que está en la posición 0 (primero)

var masFrutas = frutas.push("Frutilla", "Cereza") //sumando más elementos al array agregandolos al final

console.log(frutas)
console.log(frutas[frutas.length-1]) //arroja el último elemento del array 

var borrarUltimo = frutas.pop(); //eliminar el último elemento que existe en el array

console.log(frutas);

var nuevaFruta = frutas.unshift("Naranja"); //agrega un elemento al principio del array

console.log(frutas);

var borrarPrimero = frutas.shift(); //elimina el primer elemento dentro del array

console.log(frutas)

var posicion = frutas.indexOf("Uvas"); //te muestra la posición del array en la que se encuentra el elemento solicitado

console.log(posicion)


//Array de objetos
var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "TV", costo: 2500},
    {nombre: "Libro", costo: 120},
    {nombre: "Celular", costo: 9000},
    {nombre: "Laptop", costo: 9900},
    {nombre: "Teclado", costo: 1000},
    {nombre: "Audifonos", costo: 890},
]
// .FILTER
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});
//la funcion filter, filtra la información dependiendo de solamente los articulos que cumplen con la validación.
console.log(articulosFiltrados)

//.MAP

var nombreArticulo = articulos.map(function(articulo){
    return articulo.nombre;
});
// el .map solicita el dato que se le pide y solamente arroja los datos de TODOS los articulos 
console.log(nombreArticulo);