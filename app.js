let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificaraIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('P',`Acertaste el número en ${intentos} ${(intentos === 1)? 'vez': 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento ('p','El número secreto es menor');
            } else {
                asignarTextoElemento('p','El número secreto es mayor');
            }
            intentos++;
            LimpiarCaja();
    }
    return;
    
}
function LimpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
    
}
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del Número Secreto');
    asignarTextoElemento('P', 'Indica un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function generarNumeroSecreto() {
   return Math.floor(Math.random()*10)+1;
}   
function reiniciarJuego() {
    //limpiar la caja 
    LimpiarCaja();
    //indicar mensaje de intervalo de números
    //generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();




