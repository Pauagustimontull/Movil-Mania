
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
    alert("Has elegido conversor And");

}
function conversorPARIDAD(){
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
   
    alert("Has elegido conversor paridad");
}
function conversorA1(){
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
   let jesus = [] 
   for (var i = 0; i < numero1.length; i++) {
     
        if(numero1[i]!= 1 && numero1[i]!= 0){
            alert("No es binario");
        }else if (numero1[i]== 1 && numero1[i]== 0){
            if(numero1[i]==1){
                numreo1[i]==0;
            }else{
                numreo1[i]==1; 
            }
            
        
        }


     }
     alert(jesus)
     if(numero1.charAt(i)!=1){
       
    }
    
    
}