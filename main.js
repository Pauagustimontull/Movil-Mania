
function conversor(){
    window.open("conversor.html" , "ventana1")
}
function main(){
    window.open("index.html" , "ventana2")
}
function moviles(){
    window.open("moviles.html" , "ventana3")
}
function conversorAND(){
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    let rest= "";
    for (var i = 0; i < numero1.length; i++) {
     
        if(numero1[i]!= 1 && numero1[i]!= 0){
            alert("No es binario");
            
        }
        if(numero2[i]!= 1 && numero2[i]!= 0){
            alert("No es binario");
            
        }
      if (numero1.length>numero2.length){
         
        while(numero1.length>numero2.length){
             numero2=numero2+0;
         }
     }else if(numero1.length<numero2.length){
        
        while(numero2.length>numero1.length){
            numero1=numero1+0;
        }
     }
     if(numero1[i]==1 && numero2[i]==1){
        rest=rest+1
    }else{
        rest=rest+0
    }
     
        document.getElementById("resultado").innerHTML="El resultado es: "+rest;


}}
function conversorPARIDAD(){
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
   
    let  contador = 0;
    
   for (var i = 0; i < numero1.length; i++) {
     
        if(numero1[i]!= 1 && numero1[i]!= 0){
            alert("No es binario");
            
        }else if(numero1[i]==1){
            contador=contador+1;
        }else if(numero1[i]==0){
            
        }
     }
     if (contador%2==0){
        document.getElementById("resultado").innerHTML="El resultado es: 0";
     }else{
        document.getElementById("resultado").innerHTML="El resultado es: 1";
     }

    
}
function conversorA1(){
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    let  numero3 =" ";

   for (var i = 0; i < numero1.length; i++) {
     
        if(numero1[i]!= 1 && numero1[i]!= 0){
            alert("No es binario");
            
        }else if(numero1[i]==1){
            numero3=numero3+0
        }else if(numero1[i]==0){
            numero3=numero3+1
        }
     }
document.getElementById("resultado").innerHTML="El resultado es: "+numero3;
    
    
}

    
    
    
