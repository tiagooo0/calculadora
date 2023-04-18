

const botones = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "C", "/", "X", "+", "-", "="];
let num1 = [];
let num2 = [];
let operacionIngresada = false; 
let input = document.getElementById("result")


/*
for (let i = 0; i < botones.length; i++) {
  const boton = document.getElementById(botones[i]);
  boton.addEventListener("click", function () {
    if (botones[i] === "C")
    { input.value = "" }
    
    if (botones[i] === "1" || botones[i] === "2" || botones[i] === "3" || botones[i] === "4" || botones[i] === "5" || botones[i] === "6"
      || botones[i] === "7" || botones[i] === "8" || botones[i] === "9" || botones[i] === "0" || botones[i] === "-" || botones[i] === "+" || botones[i] === "/"|| botones[i] === "X"   || botones[i] === "=") {    
        console.log(boton.value);
      input.value += boton.value;
      
    } 
  });
}
for (let i = 0; i < botones.length; i++) {
  const boton = document.getElementById(botones[i]);
  boton.addEventListener("click", function () {
    switch (botones[i]) {
      case 'C':
        input.value = ""
      case '1'  || '2':
        console.log(boton.value);
        input.value += boton.value;
        break
    }
  })
}
*/
let ultimoBoton = "";

for (let i = 0; i < botones.length; i++) {
  const boton = document.getElementById(botones[i]);
  boton.addEventListener("click", function () {
    switch (botones[i]) {
      case 'C':
        input.value = "";
        console.log('C');
        break;
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
        input.value += boton.value;
        console.log(boton.value);
        break;
      case '/':
      case 'X':
      case '+':
      case '-':
      case '=':
        if (ultimoBoton !== "" && ultimoBoton.match(/[\/X+\-=]/)) {
          
        } else {
          input.value += boton.value;
          
          // Código para realizar operaciones matemáticas
          console.log(boton.value);
        }
        break;
      default:
        console.log("Botón no reconocido");
        break;
    }
    ultimoBoton = botones[i];
  })
}
