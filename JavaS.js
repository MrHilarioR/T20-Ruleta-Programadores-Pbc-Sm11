function tercs(){
var mensaje = "Sin igualdad "
var nombre = document.getElementById("nomb").value; 
var x1 = Math.trunc(Math.random()*10 ) + 1;
var x2 = Math.trunc(Math.random()*10 ) + 1; 
var x3 = Math.trunc(Math.random()*10 ) + 1;
switch (x1){
case 1:
document.getElementById("boxl").innerHTML="<img src= '1.jpg'>"; 
break;
case 2:
document.getElementById("boxl").innerHTML="<img src= '2.jpg'>"; 
break;
case 3:
document.getElementById("boxl").innerHTML="<img src= '3.jpg'>"; 
break;
case 4:
document.getElementById("boxl").innerHTML="<img src= '4.jpg'>"; 
break;
case 5:
document.getElementById("boxl").innerHTML="<img src= '5.jpg'>"; 
break;
case 6:
document.getElementById("boxl").innerHTML="<img src= '6.jpg'>"; 
break;
case 7:
document.getElementById("box1").innerHTML="<img src= '7.jpg'>"; 
break;
case 8:
document.getElementById("box1").innerHTML="<img src= '8.jpg'>"; 
break;
case 9:
document.getElementById("box1").innerHTML="<img src= '9.jpg'>"; 
break;
case 10:
document.getElementById("box1").innerHTML="<img src= '10.jpg'>"; 
break;
"//Repetir hasta cumplir para boxl con el xl, la cantidad de fotos correspond ientes.-"
}
switch (x2){
case 1:
document.getElementById("box2").innerHTML="<img src= '1.jpg'>"; 
break;
case 2:
document.getElementById("box2").innerHTML="<img src= '2.jpg'>"; 
break;
case 3:
document.getElementById("box2").innerHTML="<img src= '3.jpg'>"; 
break;
case 4:
document.getElementById("box2").innerHTML="<img src= '4.jpg'>"; 
break;
case 5:
document.getElementById("box2").innerHTML="<img src= '5.jpg'>"; 
break;
case 6:
document.getElementById("box2").innerHTML="<img src= '6.jpg'>"; 
break;
case 7:
document.getElementById("box2").innerHTML="<img src= '7.jpg'>"; 
break;
case 8:
document.getElementById("box2").innerHTML="<img src= '8.jpg'>"; 
break;
case 9:
document.getElementById("box2").innerHTML="<img src= '9.jpg'>"; 
break;
case 10:
document.getElementById("box2").innerHTML="<img src= '10.jpg'>"; 
break;
"//Repetir hasta cumplir para box2 con el x2, la cantidad de fotos correspond ientes.-"
}
switch (x3){
case 1:
document.getElementById("box3").innerHTML="<img src= '1.jpg"; 
break;
case 2:
document.getElementById("box3").innerHTML="<img src= '2.jpg'>"; 
break;
case 3:
document.getElementById("box3").innerHTML="<img src= '3.jpg'>"; 
break;
case 4:
document.getElementById("box3").innerHTML="<img src= '4.jpg'>"; 
break;
case 5:
document.getElementById("box3").innerHTML="<img src= '5.jpg'>"; 
break;
case 6:
document.getElementById("box3").innerHTML="<img src= '6.jpg'>"; 
break;
case 7:
document.getElementById("box3").innerHTML="<img src= '7.jpg'>"; 
break;
case 8:
document.getElementById("box3").innerHTML="<img src= '8.jpg'>"; 
break;
case 9:
document.getElementById("box3").innerHTML="<img src= '9.jpg'>"; 
break;
case 10:
document.getElementById("box3").innerHTML="<img src= '10.jpg'>"; 
break;
"//Repetir hasta cumplir para box3 con el x3, la cantidad de fotos correspond ientes.-"
}
if ((x1==x2)&&(x1==x3)){
mensaje="Tercias!!";
}
else if ((x1==x2)||(x1==x3)||(x2==x3)){ 
mensaje="Pares!";
}else
mensaje="Sin igualdad ";
document.getElementById("saludo").innerHTML="Hola "+nombre+" !Tu reultado es";
document.getElementById("resul").innerHTML=mensaje;
}
