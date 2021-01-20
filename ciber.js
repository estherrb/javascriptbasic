console.log("Hola Mundo")
alert("Esther Richter")
var nom="Esther"
var cognom="Richter"
console.log(nom+" "+cognom)
var num1=10
var num2=20
var num3=num1+num2
console.log("La suma de "+ num1+" + "+num2 + " es " + num3)
const nota_examen=prompt("Escribe la nota del ejercicio");
if (nota_examen<5){
	alert("He suspendido el examen con " + nota_examen)
}
else
{
	alert("He aprobado el examen con " + nota_examen)
}
var frase="Tinc un cotxe de color verd"
var frase2=frase.replace("verd","blau")
console.log(frase)
console.log(frase2)
var obj=["taula","cadira","ordinador","llibreta"]
for (i = 0; i < obj.length; i++) {
 console.log ("L'objecte "+ obj[i]+"   esta en la posició "+ i )
}
var calc=prompt("Que vol fer: sumar, restar, dividir o multiplicar")
var num3=parseInt(prompt("Quin numero:"))
var num4=parseInt(prompt("Altre numero"))

var resultat = calculadora(calc,num3,num4);
 console.log(resultat)

function calculadora (calc,num3,num4) {
	//Calculadora

switch (calc) {
  case "restar":
     return num3-num4;
      break;
  case "sumar":
  	  return num3+num4;
  	  break;
  case "multiplicar":
  		return num3*num4;
  		break;
  case "dividir":
  		return num3/num4;
  		break;
  default:
  		alert("No es pot calcula amb aquest metode")
  }
}
  function calcular () {
  //Calculadora
 
  num1 = document.getElementById("numero1").value;
  num2 = document.getElementById("numero2").value;
  op = document.getElementById("operacion").value;
     

switch (op) {
  case "-":
     document.getElementById("result").innerHTML = num1 - num2; 
      break;
  case "+":
      document.getElementById("result").innerHTML = parseInt(num1) + parseInt(num2); 
      break;
  case "*":
      document.getElementById("result").innerHTML = num1 * num2; 
      break;
  case "/":
     document.getElementById("result").innerHTML = num1 / num2; 
      break;
  default:
      alert("No es pot calcula amb aquest metode")
  }
}



