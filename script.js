const botones = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "C", "/", "X", "+", "-","="];
let num1 = [];
let num2 = [];
let operacionIngresada = false; 



for (let i = 0; i < botones.length; i++) {
  const boton = document.getElementById(botones[i]);
  boton.addEventListener("click", function() {
    if (botones[i] === "+" || botones[i] === "-" || botones[i] === "X" || botones[i] === "/" ||  botones[i] === "C") {    
      console.log("ingresa un numero");
      num1 += botones[i];
      operacionIngresada = true;
    } else {
      if (operacionIngresada) {
        num2 += botones[i];
        console.log("el num2 es " + num2);
      } 
    }
    if (botones[i] === "=") {
      
        console.log(num1+=num2)
      
    }
    
    console.log("Hiciste clic en el botón " + botones[i]);
  });
}
