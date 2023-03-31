var miAuto = {
    marca: "Fiat",
    modelo: "Weekend",
    año: 1998,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.año}`) //en los objetos se pueden agregar funciones que arrojen datos o como sea.
    }
};
//el this hace referencia al objeto local en el que es usado.

console.log(miAuto) // si llamamos de esta forma, nos aparecerá todo el objeto
console.log(miAuto.año) // al agregar el "." y el nombre de la descripción, nos arrojará ese dato.
console.log(miAuto.detalleDelAuto()) 

// FUNCION COSNTRUCTORA

function auto(marca,modelo,año){
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
};

console.log(auto);

var autoNuevo = new auto("Tesla", "Model S", 2023);

console.log(autoNuevo);

var autoNuevo2 = new auto("Tesla","Model X", 2022);
var autoNuevo3 = new auto("Tesla","Model Y", 2022);

console.log(autoNuevo2);
console.log(autoNuevo3);


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

//.FIND

var articuloEncontrado = articulos.find(function(articulo){
    return articulo.costo === 9000
});
//con find generamos un nuevo array con la referencia dada y nos arrojará el parametro que sea estrictamente igual al parametro o dato que le damos.
console.log(articuloEncontrado)

// .forEach

articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});

//solamente devolverá los datos del termino que se le dió, en este caso SOLAMENTE LOS NOMBRES.

//.SOME

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 1000
})
console.log(articulosBaratos)
// este some hace una validación y regresará si hay o no hay articulos con esa validación true o false. En mi lista SÍ TENGO MÁS BARATOS DE 1000 asi que arrojará TRUE
