const bottonEncode = document.getElementById("encode"); //id del boton cifrar
const bottonDecode = document.getElementById("decode");// id del boton descifrar

bottonEncode.addEventListener("click", event => {//Evento del boton cifrar
    let newText = document.getElementById("string").value;// Captura de datos de los input USUARIO
    let newNumber = document.getElementById("offset").value; //Número del usuario
    let resultado = cipher.encode(newNumber,newText);// Cifrar
    document.getElementById("result").value = resultado;// Pinte en el HTML
});
bottonDecode.addEventListener("click", event => { //Evento del boton descifrar
    let newText = document.getElementById("string").value;// Captura de datos de los input USUARIO
    let newNumber = document.getElementById("offset").value; //Número del usuario
    let resultado2 = cipher.decode(newNumber,newText);// Descifrar
    document.getElementById("result").value = resultado2;// Pinte en el HTML
});

