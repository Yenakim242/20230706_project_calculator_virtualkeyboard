// Se debe crear un teclado virtual que permita escribir mediante diferentes inputs que simulan cada una de las letras del abecedario:
// - Intro que efectúa un salto de línea.
// - Shift que una vez pulsada conmuta entre minúsculas y mayúsculas.
// - Space que escribe un espacio
// - Delete que borra el último carácter.
// La zona donde se verá reflejado el texto es un textarea y todo el contenido debe crearse desde JS,

let body = document.getElementsByTagName("body")[0];
// 1. Div para diseñar teclado
let div0 = document.createElement("div");
div0.setAttribute("id", "virtualKeyboard");
div0.setAttribute("class", "tecladoVirtual");
body.appendChild(div0);
// 2. Crear los componenetes del teclado
// 2-1) Textarea
let textarea = document.createElement("textarea");
textarea.setAttribute("name", "keyMonitor");
textarea.setAttribute("id", "screenTextarea");
textarea.setAttribute("class", "pantallaTextarea");
textarea.setAttribute("cols", "50");
textarea.setAttribute("rows","20");
div0.appendChild(textarea);
// 2-2) Div para teclado
let divTeclado = document.createElement("div");
divTeclado.setAttribute("class", "teclado");
divTeclado.setAttribute("id", "keyboard");
div0.appendChild(divTeclado);
// 3. Para imprimir teclado
let pantallaTeclado = document.getElementById("keyboard");
// console.log(textarea);
// 4. El contenido del teclado con Array
let letrasTeclado = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"], 
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ"],
    ["z", "x", "c", "v", "b", "n", "m", ",", "."],
    ["Shift", "Space", "Enter", "Delete"]
];
// console.log(tecladoVirtual.length);
// 5. Para coincidir con botones y letras
for (let i = 0; i < letrasTeclado.length; i++) {
    let tecladosFila = document.createElement("div");
    tecladosFila.setAttribute("class", "tecladosFila");
    for (let j = 0; j < letrasTeclado[i].length; j++) {
        let boton = document.createElement("button");
        boton.setAttribute("id", "" + letrasTeclado[i][j]);
        boton.setAttribute("value", "" + letrasTeclado[i][j]);
        boton.setAttribute("type", "button");
        boton.innerHTML = letrasTeclado[i][j];
        boton.addEventListener("click", tipoLetra);
        tecladosFila.appendChild(boton);
    }
    pantallaTeclado.appendChild(tecladosFila);
}

// función para ejecutar el teclado
let shiftBoton = false;

function tipoLetra(boton) {
    let eventBoton = boton.target.textContent;
    // valor de los botones del teclado
    switch (eventBoton) {
        case "Space":
            textarea.value += " ";
            break;

        case "Enter":
            textarea.value += "\n";
            break;

        case "Delete":
            textarea.value = textarea.value.substring(0, textarea.value.length - 1);
            break;

        case "Shift":
            shiftBoton = !shiftBoton;
            tecUpperCase();
            break;

        default:
            if (shiftBoton) {
                textarea.value += eventBoton.toUpperCase();
            } else {
                textarea.value += eventBoton.toLowerCase(); // Donde está?
            }
            break;
    }
}

// Funciones para Shift
function tecUpperCase() {
    let shiftClass1 = document.getElementById("Shift");
    shiftClass1.classList.toggle("verde");

    for (let i = 0; i < letrasTeclado.length; i++) {
        for (let j = 0; j < letrasTeclado[i].length; j++) {
            let uppercaseClass = document.getElementById(letrasTeclado[i][j]);
            uppercaseClass.classList.toggle("upperCase");
        } 
    }
}

// function tecLowerCase() {
//     let shiftClass2 = document.getElementById("Shift");
//     shiftClass2.classList.toggle("verde");
//     for (let i = 0; i < letrasTeclado.length; i++) {
//         for (let j = 0; j < letrasTeclado[i].length; j++) {
//             let lowercaseClass = document.getElementById(letrasTeclado[i][j]);
//             lowercaseClass.classList.toggle("lowerCase");
//         } 
//     }
// }

// Material de análisis:
// - toUpperCase()
// - sustr()

// 1- crear solo con JS!?
// 2- createElement y funcion
