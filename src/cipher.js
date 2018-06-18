//Objeto que contiene 2 funciones
window.cipher = {
  //Función con ECMA6 para ENCODE (cifrar texto ingresado)
  //Parámetros con especificaciones necesarias para el cifrado
  //RETURN statement stops the execution of a function and returns a value from that function
  encode : (message,offset) => {
   message = message.toUpperCase();
   offset = parseInt(offset);
   let lastMessage = "";
   for (let i = 0; i < message.length; i++) {
    let charcodear = message.charCodeAt(i);
    if (charcodear==32) {
      lastMessage += String.fromCharCode(charcodear);
    } else {
      let formulaMichelle = (charcodear - 65 + offset)% 26 + 65;
      lastMessage += String.fromCharCode(formulaMichelle);
    }
    
  }
  return lastMessage;
  },

  decode : (cipherMessage,offset2) => {
    cipherMessage = cipherMessage.toUpperCase();
    offset2 = parseInt(offset2);
    let decipherMessage = "";
    for (let y = 0; y < cipherMessage.length; y++) {
      let charcodeando = cipherMessage[y].charCodeAt();
      if (charcodeando == 32){
        decipherMessage += String.fromCharCode(charcodeando);
      } else{
      let formulaDecode = (charcodeando - 90 - offset2)% 26 + 90;    
      decipherMessage += String.fromCharCode(formulaDecode);
      }
  }
  return decipherMessage;
  },
  
  //Pendiente. Debería retornar un objeto con dos funciones (encode y decode) con offset fijado
  createCipherWithOffset : () => {
   

  }
};
