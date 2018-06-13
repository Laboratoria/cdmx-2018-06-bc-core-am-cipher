const newText = document.getElementById("string"); //Texto del usuario
const newNumber = document.getElementById("offset"); //Número del usuario
const bottonEncode = document.getElementById("encode"); //id del boton cifrar
const bottonDecode = document.getElementById("decode");// id del boton descifrar
let total = document.getElementById("result"); //Input que devolvera el texto

bottonEncode.addEventListener("click", event => {
    let clickEncode = window.cipher.encode(
        newNumber.value,
        newText.value,
        total.value
    );
});

bottonDecode.addEventListener("click", event => {
    let clickDecode = window.cipher.decode(
        newNumber.value,
        newText.value,
        total.value
    );
});



