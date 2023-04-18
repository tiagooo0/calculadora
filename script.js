const botones = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "C", "/", "*", "+", "-", "=", "(", ")",".",];
let num1 = [];
let num2 = [];
let operacionIngresada = false; 
let input = document.getElementById("result")
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
      case "(":
      case ")":
      case '/':
      case '*':
      case '+':
      case ".":
      case '-':
        //es una expresión regular
        if (ultimoBoton !== "" && ultimoBoton.match(/[\/ .*+\-=]/)) {
        
        } else {
          input.value += boton.value;
          // codigo para saber la operacion
          let op;
          switch (boton.value) {
            case '*': op = 'multiplicacion'
              break
              case '+': op = 'suma'
              break
              case '-': op = 'resta'
              break
          case '/': op = 'division'
          break
        }
          console.log(boton.value + '(' + op + ')' );
        }
        break;
      case '=':
        input.value = eval(input.value)
        console.log("su resultado es = " + input.value)
        break
      default:
        console.log("Botón no reconocido");
        break;
    }
    ultimoBoton = botones[i];
  })
}
