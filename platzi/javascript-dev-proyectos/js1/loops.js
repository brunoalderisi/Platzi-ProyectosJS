var estudiantes = ["Juan", "Pepe", "Raul", "Marta", "Luisa", "Leonora"];
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`)
}


console.log("for i")
for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

console.log("for of")
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante)
}

console.log("bucle while")
while(estudiantes.length > 0){
    var estudianteWhile = estudiantes.shift();
    saludarEstudiantes(estudianteWhile)
}

