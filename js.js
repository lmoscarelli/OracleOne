//------------------ ENCRIPTAR -------------------------------------

function encriptar(){

    var textoIngresado = document.querySelector("#input-texto").value;
  
        var textoEncriptado = textoIngresado.replace(/e/g,"enter");
        var textoEncriptado = textoEncriptado.replace(/i/g,"imes");
        var textoEncriptado = textoEncriptado.replace(/a/g,"ai");
        var textoEncriptado = textoEncriptado.replace(/o/g,"ober");
        var textoEncriptado = textoEncriptado.replace(/u/g,"ufat");
  
        document.getElementById("box").value = textoEncriptado;
        document.getElementById("input-texto").value = ''; // esto es para volverlo a limpiar "clear"
  
        var titulo = document.querySelector("h2");
        titulo.textContent="Mensaje Encriptado:";
     
  }

//------------------ DESENCRIPTAR -------------------------------------

  function desencriptar() {

    var textoIngresado = document.getElementById("input-texto").value;

        var textoDesencriptado = textoIngresado.replace(/enter/g, "e")
        var textoDesencriptado = textoDesencriptado.replace(/imes/g,"i");
        var textoDesencriptado = textoDesencriptado.replace(/ai/g,"a");
        var textoDesencriptado = textoDesencriptado.replace(/ober/g,"o");
        var textoDesencriptado = textoDesencriptado.replace(/ufat/g,"u");
    
        document.getElementById("box").value  = textoDesencriptado;
        document.getElementById("input-texto").value = ''; // esto es para volverlo a limpiar "clear"
        
        var titulo = document.querySelector("h2");
        titulo.textContent="Mensaje Desencriptado:";
        
      
}

//------------------ COPIAR -------------------------------------

function copiar() {

    var textoCopiado = document.getElementById("box");
    textoCopiado.select();
    navigator.clipboard.writeText(textoCopiado.value); // copia texto
  
    var titulo = document.querySelector("h2");
    titulo.textContent="Mensaje Copiado:";
    
  }


  /*encriptar(){

    let definir = [{a:"ai"},{e:"enter"},{i:"imes"},{o:"over"},{u:"ufat"}]; // defino cambios
    
    for( let i=0; i<= definir.length;i++){
        return (definir[i]);

        document.getElementById("mensajeCifrado").value = textoEncriptado;
       document.getElementById("input-texto").value = ''; // esto es para volverlo a limpiar "clear"
  
        var titulo = document.querySelector("h2");
        titulo.textContent="Mensaje Encriptado:";
    }
    }
*/



