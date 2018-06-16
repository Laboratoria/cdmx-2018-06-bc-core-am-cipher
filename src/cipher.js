window.cipher = {
  
  encode : (message,offset) => {
   message = message.toUpperCase();
   offset = parseInt(offset);
   let lastMessage = "";
   for (let i = 0; i < message.length; i++) {
    let charcodear = message.charCodeAt(i);
    let formulaMichelle = (charcodear - 65 + offset)% 26 + 65;
    lastMessage += String.fromCharCode(formulaMichelle);
  }
  return lastMessage;
  },

  decode : (cipherMessage,offset2) => {
    cipherMessage = cipherMessage.toUpperCase();
    offset2 = parseInt(offset2);
    let decipherMessage = "";
    for (let y = 0; y < cipherMessage.length; y++) {
      let charcodeando = cipherMessage[y].charCodeAt();
      let formulaDecode = (charcodeando - 90 - offset2)% 26 + 90;    
      decipherMessage += String.fromCharCode(formulaDecode);
  }
  return decipherMessage;
  },

  createCipherWithOffset : () => {
   

  }
};
