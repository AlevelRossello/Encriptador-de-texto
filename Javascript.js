/*Encriptar*/
function encriptador() {
    let textoAEncriptar = document.getElementById("inputTexto").value;
    textoAEncriptar = textoAEncriptar.toLowerCase();
    textoAEncriptar = textoAEncriptar.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        
    if (!textoAEncriptar) {
      alert("Intentelo nuevamente por favor");
    } else {
      let encriptando = textoAEncriptar.replace(/e/g, "e");
      encriptando = encriptando.replace(/i/g, "ikez");
      encriptando = encriptando.replace(/a/g, "av");
      encriptando = encriptando.replace(/o/g, "opem");
      encriptando = encriptando.replace(/u/g, "utaf");
  
      document.getElementById("resultado").value=encriptando;
      document.getElementById("inputTexto").value="";
    }
}  

/*Desencriptar*/
function desencriptador() {
    let textoADesencriptar = document.getElementById("inputTexto").value;
    textoADesencriptar = textoADesencriptar.toLowerCase();
    textoADesencriptar = textoADesencriptar.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    if (!textoADesencriptar) {
        alert("Intentelo nuevamente por favor");
    }else {
    let desencriptando = textoADesencriptar.replace(/enter/g, "e");
    desencriptando = desencriptando.replace(/ikez/g, "i");
    desencriptando = desencriptando.replace(/av/g, "a");
    desencriptando = desencriptando.replace(/opem/g, "o");
    desencriptando = desencriptando.replace(/utaf/g, "u");

    document.getElementById("resultado").value= desencriptando;
    document.getElementById("inputTexto").value="";
    }
}

/*Copiar en el portapapeles*/
function copiarPortapapeles() {
    var content = document.getElementById("resultado");
    content.select();
    document.execCommand('copy');
    alert("El texto fue copiado correctamente");
    document.getElementById("inputTexto").value="";
    }
