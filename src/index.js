//Declaración de variables para la función de ENCODE
let message = document.getElementById('mensaje');
let offset = document.getElementById('offsetvalor');
let showLastMessage = document.getElementById('textoCifrado');
let click1 = document.getElementById('enCode');

//ENCODE. addEventListener() registra un evento a un objeto en específico
click1.addEventListener('click', event => {
  showLastMessage.innerHTML += window.cipher.encode 
  (message.value, offset.value)
});


//Declaración de variables para la función de DECODE
let cipherMessage = document.getElementById('mensajeadescifrar');
let offset2 = document.getElementById('offsetvalor2');  
let devolverMensaje = document.getElementById('textoDescifrado');
let click2 = document.getElementById('deCode');

//DECODE. addEventListener() registra un evento a un objeto en específico
click2.addEventListener('click', event => {
  devolverMensaje.innerHTML += window.cipher.decode 
  (cipherMessage.value, offset2.value)
});
