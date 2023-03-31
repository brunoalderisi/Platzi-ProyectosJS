const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const btnResultado = document.querySelector('#btnResultado');
const resultado = document.querySelector('.resultado');

btnResultado.addEventListener('click', sumando())
function sumando (){
    console.log("si")
    suma = input1.value + input2.value;
    resultado.innerText;
}
