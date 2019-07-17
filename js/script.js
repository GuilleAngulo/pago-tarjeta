/*eslint-env browser*/

var nombreTarjeta = document.querySelector("#nombre-tarjeta");
var textoNombreTarjeta = document.querySelector(".nombre-tarjeta");

var numeroTarjeta = document.querySelector("#numero-tarjeta");
var textoNumeroTarjeta = document.querySelector(".numero-tarjeta");

var expiracionTarjeta = document.querySelector("#expiracion-tarjeta");
var textoExpiracionTarjeta = document.querySelector(".expiracion-tarjeta");

var cvvTarjeta = document.querySelector("#cvv-tarjeta");
var textoCvvTarjeta = document.querySelector(".cvv-tarjeta");

var carta = document.querySelector(".carta");

var front = document.querySelector(".front");

var compania = document.querySelector(".compania");

var mostrar = true;
var delante = true;

function mostrarLogotipo(numero) {
    switch (numero) {
            
                case "3":
                    compania.src = "img/american.png";
                    compania.classList.add("compania-active");
                    break;
                //Tecla "4"
                case "4":
                    compania.src = "img/visa.png";
                    compania.classList.add("compania-active");
                    break;
                //Tecla "5"
                case "5":
                    compania.src = "img/mastercard.png";
                    compania.classList.add("compania-active");
                    break;
                case "6":
                    compania.src = "img/discover.png";
                    compania.classList.add("compania-active");
                    break;
                default:
                    break;
            }
}


function dibujarNumero(e) {
    
    switch(numeroTarjeta.value.length) {
        case 0:
            compania.classList.remove("compania-active");
            break;
        case 4:
        case 9:
        case 14:
            if(e.keyCode != 8){
                numeroTarjeta.value += ' ';
            }
            break;
        default:
            break;
    }
    if(numeroTarjeta.value.length >= 1) mostrarLogotipo(numeroTarjeta.value.charAt(0));
    
    textoNumeroTarjeta.innerHTML = numeroTarjeta.value;
}


function formatearNumero(e) {
    var text = this.value;
    var length = text.length;
    
    if(length > 18) {
        this.value = text.slice(0,19);
    }
    
    if(isNaN(e.data) || e.data == " ") {
        this.value = text.slice(0,text.length - 1); 
    }
    
}

function dibujarNombre() {
    textoNombreTarjeta.innerHTML = nombreTarjeta.value;
}


function formatearNombre(e) {
    var text = this.value;
    var length = text.length;
    var regex = /[A-Za-z]/;

    if(length > 26) {
        this.value = text.slice(0,26);
        }
    if(!regex.test(e.data) && e.data != " ") {
        this.value = text.slice(0,text.length - 1); 
    }
}


function dibujarExpiracion(e) {
    
    if(expiracionTarjeta.value.length == 2 && e.keyCode != 8){
        expiracionTarjeta.value += '/';
    }
    textoExpiracionTarjeta.innerHTML = expiracionTarjeta.value;
}

function formatearExpiracion(e) {
    var text = this.value;
    var length = text.length;
    if(length > 5) {
        this.value = text.slice(0,5);
    }
    if(isNaN(e.data) || e.data == " ") {
        this.value = text.slice(0,text.length - 1); 
    }
}

function dibujarCvv() {
    textoCvvTarjeta.innerHTML = cvvTarjeta.value;
}

function formatearCvv(e) {
    var text = this.value;
    var length = text.length;
    
    if(length > 3) {
        this.value = text.slice(0,3);
    }
    
    if(isNaN(e.data) || e.data == " ") {
        this.value = text.slice(0,text.length - 1); 
    }
    
}

function mostrarTarjeta() {
    front.style.opacity = 1;
    front.style.transform = "scale(1)";
}

function voltearTarjetaAtras(){
    carta.style.transform = "rotateY(180deg)";
    delante = false;
 }

function voltearTarjetaDelante(){
    if(mostrar) mostrarTarjeta();
    if(!delante){
      carta.style.transform = "rotateY(360deg)"; 
      delante = true;  
    } 
}

nombreTarjeta.addEventListener("keyup", dibujarNombre);
nombreTarjeta.addEventListener("input", formatearNombre);
nombreTarjeta.addEventListener("focus", voltearTarjetaDelante);

numeroTarjeta.addEventListener("keyup", dibujarNumero);
numeroTarjeta.addEventListener("input", formatearNumero);
numeroTarjeta.addEventListener("focus", voltearTarjetaDelante);

expiracionTarjeta.addEventListener("keyup", dibujarExpiracion);
expiracionTarjeta.addEventListener("input", formatearExpiracion);
expiracionTarjeta.addEventListener("focus", voltearTarjetaDelante);

cvvTarjeta.addEventListener("keyup", dibujarCvv);
cvvTarjeta.addEventListener("input", formatearCvv);
cvvTarjeta.addEventListener("focus", voltearTarjetaAtras);