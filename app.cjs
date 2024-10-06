//VerificarParidad

console.log("archivo funciona");

function verificarParidad(numero){
    if (n%2 === 0){console.log ("El numero es par");}
    else {console.log ("El numero es impar");}
}    

 //clasificarEdad
 function clasificarEdad(edad){
    if (edad>18 && edad<65){console.log ("Es adulto");}
    else if(edad>65){console.log ("Es adulto mayor"); }
    else{console.log ("Es menor de edad");}

 }

 //cuentaRegresiva
function cuentaRegresiva(numero){
   while(typeof n !== 'number' || n<=0 ){
      console.log("El numero debe ser mayor a cero y entero");
      return;
   }
   const cuentaRegresive= setInterval(()=>{
      console.log(n);
      n--;
      if(n<0){
         clearInterval(cuentaRegresive);
         console.log("opa")
         return;
          
      
      }
   
  

   },1000);
}   


//repetirMensaje
function repetirMensaje(){
   n=0
   do{ 
       console.log("Estoy aprendiendo JavScript");
       n++;
   }while(n<5);

}
//Repetir numeros pares
let imprimirPares= function(n){
   for(let i=0; i<n; i++){
      
      if(i%2 === 0 ){console.log(i);}
   }

}

//detenerEnSeis
function detenerEnSeis(){
    const fin =10; 
   for(let i=0; i<=fin; i++){
      if(i===6){break;}
   }
}
//saltar cinco
function saltarCinco(){
      fin=10;
      for(let i=0; i<=fin;i++ ){
         if (i===5){continue;}
      }
} 

//esVocal
function esVocal(vocal){
   switch(vocal){
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
         return console.log("es una vocal");
      default:
         return console.log("no es una vocal")
   }
}

//diaSemana
function obtenerDiaSemana(dia){
   switch(dia){
      case 1:
         return console.log("lunes");
      case 2:
         return console.log("martes");
      case 3:
         return console.log("miercoles");
      case 4:
         return console.log("jueves");
      case 5: 
         return console.log("viernes");
      case 6: 
         return console.log("sabado");
      case 7: 
         return console.log("Domingo");
   }

}
//evaluarNumeros
function evaluarNumeros(a,b,c){
   if(a>0 && b>0 && c>0){
      console.log("SON TODOS POSITIVOS");

   }
   else if(a<0 && b<0 && c<0){
      console.log("Son todos negativos");

   }
   else {
      console.log("Al menos uno es negativo");
   }
   

}
 
 module.exports={
    verificarParidad,
    clasificarEdad,
    cuentaRegresiva,
    repetirMensaje,
    imprimirPares,
    detenerEnSeis,
    saltarCinco,
    obtenerDiaSemana,
    esVocal,
    evaluarNumeros,

 };