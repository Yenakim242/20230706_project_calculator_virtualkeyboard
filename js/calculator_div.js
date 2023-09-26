// Actividad 1.


// Cada calculadora permite llevar a cabo la operación de suma, resta, división y multiplicación de forma independiente.

let inputNumero = document.getElementById("cant_div");
let body = document.getElementsByTagName("body")[0];
// Función para crear Div
function crearDivs() {
    for (let i = 0; i < inputNumero.value; i++) {
        // resetear();
        let divNum = document.createElement("div");
        body.appendChild(divNum)[i];
        // Crear un formulario dentro del div
        let form01 = document.createElement("form");
        form01.setAttribute("id", "formDiv"+[i+1]);
        // 1-1) Primer Num
        let labelPrimerNum = document.createElement("label");
        labelPrimerNum.setAttribute("for", "primer_num");
        labelPrimerNum.innerHTML = "Introduzca el primer numero: <br>";
        form01.appendChild(labelPrimerNum);
        let inputPrimerNum = document.createElement("input");
        inputPrimerNum.setAttribute("type", "number");
        inputPrimerNum.setAttribute("name", "primer_num");
        inputPrimerNum.setAttribute("id", "primer_nume"+ [i+1]);
        inputPrimerNum.setAttribute("class", "primer_camp" + [i+1]);
        form01.appendChild(inputPrimerNum);
        // 1-2) Segundo Num
        let labelSegundoNum = document.createElement("label");
        labelSegundoNum.setAttribute("for", "segundo_num");
        labelSegundoNum.innerHTML = "Introduzca el segundo numero: <br>";
        form01.appendChild(labelSegundoNum);
        let inputSegundoNum = document.createElement("input");
        inputSegundoNum.setAttribute("type", "number");
        inputSegundoNum.setAttribute("name", "segundo_num");
        inputSegundoNum.setAttribute("id", "segundo_nume"+ [i+1]);
        inputSegundoNum.setAttribute("class", "segundo_camp" + [i+1]);
        form01.appendChild(inputSegundoNum);
        // 1-3) Operación
        let labelOperaciones = document.createElement("label");
        labelOperaciones.setAttribute("for", "operaciones");
        labelOperaciones.innerHTML = "Introduzca el tipo de operacion: <br>";
        form01.appendChild(labelOperaciones);
        let inputOperaciones = document.createElement("input");
        inputOperaciones.setAttribute("type", "text");
        inputOperaciones.setAttribute("name", "operaciones");
        inputOperaciones.setAttribute("id", "camp_operaciones" + [i+1]);
        inputOperaciones.setAttribute("class", "camp_operacion" + [i+1]);
        inputOperaciones.setAttribute("placeholder", "| + | - | / | * |");
        form01.appendChild(inputOperaciones);
        // 1-4) button 
        let botonCalcular = document.createElement("button");
        botonCalcular.setAttribute("type", "button");
        botonCalcular.setAttribute("onclick", "calcularOperacione()");
        botonCalcular.innerHTML = "Calcular";
        form01.appendChild(botonCalcular);

        // Imprimir el resultado con <span>
        let span = document.createElement("span");
        span.setAttribute("id", "resultado"+[i+1]);
        form01.appendChild(span);
        divNum.appendChild(form01);
    }
}

// función para crear calculador..
function calcularOperacione() {
    for (let i = 0; i < inputNumero.value; i++) {
        let operacion = document.getElementById("camp_operaciones" + [i+1]).value;
        let alert = document.getElementById("resultado"+ [i+1]);
        // console.log(operacion);
        let N1 = Number(document.getElementById("primer_nume" + [i+1]).value);
        let N2 = Number(document.getElementById("segundo_nume"+ [i+1]).value);
        // console.log(alert, N1, N2);
        if (operacion === "+" ||  operacion === "-" || operacion === "*" || operacion === "/") {
            let result;
            switch (operacion) {
                case "+":
                    result = N1 + N2;
                    break;
    
                case "-":
                    result = N1 - N2;
                    break;
    
                case "*":
                    result = N1 * N2;
                    break;
    
                case "/":
                    result = N1 / N2;
                    break;
            
                // default:
                //     alert.innerHTML = "Operacion invalida!";
                //     break;
            }
            if (result === Infinity) {
                alert.innerHTML = "No se puede dividir con 0.";
            // if (inputPrimerNum === "" || inputSegundoNum === "" || inputOperaciones === "") {
            //     alert("Invalido!");
            } else {
                alert.innerHTML = "Resultado es " + result;
            }
        }
    }
}

// function resetear() {
//     while (divNum.firstchild) {
//         divNum.removeChild(divNum.firstchild)
//     }
// }