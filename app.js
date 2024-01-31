let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 50;
console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
   
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        //El ususario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "el numero secreto es menor");
        } else {
           asignarTextoElemento("p", "el numero secreto es mayor") 
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
    
} 

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);
    //si ya sorteamos todos los numeros
    if (listaNumeroSorteado.length == numeroMaximo) {
    asignarTextoElemento("p", "ya se sortearon todos los numeros posibles");
    } else {
        //si el numero generado esta incluido en la lista hacemos una operacion
        if (listaNumeroSorteado.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales() {
    asignarTextoElemento("h1", "juego del número secreto!");
    asignarTextoElemento("p", `indique un número del 1 al ${numeroMaximo} `);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja 
    limpiarCaja();
    //mostrar mensaje de intervalo de números
    //generar un número aleatorio
    //Iniciar el número de intentos
    condicionesIniciales(); 
    //deshabilitar el boton de nuevo juego
    
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}



condicionesIniciales();