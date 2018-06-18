window.cipher = {
 encode:(dato,offset) => {
    let ca = []; //esta variable es cifrado ascii
    let cc = [];//esta variable es cifrado cesar
    offset=parseInt(offset);


    for (let i = 0; i < dato.length; i++){
      let letra = dato[i].charCodeAt(0)

      console.log(letra)
      if(letra >= 65 && letra <= 90 ){
        ca[i] =(letra - 65 + offset) % 26 + 65
        cc[i] = String.fromCharCode(ca[i]);
      } else if (letra >= 97 && letra <= 122) {
        ca[i] =(letra - 97 + offset) % 26 + 97
        cc[i] = String.fromCharCode(ca[i]);
      } else {
        cc[i] = String.fromCharCode(letra);
      }
    }

    console.log(dato, cc)

let resultado = cc.join('');
    return resultado
    console.log(cc.join(''))
},
  //comentario sin funcion
 decode:(dato3,offset) => {

    let ca = [];
    let cc = [];
    //console.log(offset)
    offset=parseInt(offset);


    for (let i = 0; i < dato3.length; i++){
      let letra = dato3[i].charCodeAt(0)

      //console.log(letra,offset)
      if(letra >= 65 && letra <= 90 ){
        ca[i] =(letra - 65 - offset) % 26 + 65
        cc[i] = String.fromCharCode(ca[i]);
        console.log(ca[i])
      } else if (letra >= 97 && letra <= 122) {
        ca[i] =(letra - 97 - offset) % 26 + 97
        cc[i] = String.fromCharCode(ca[i]);
      } else {
        cc[i] = String.fromCharCode(letra);
      }
    }
    console.log(ca,cc)

   dato5.value = cc.join('');
    console.log(dato5.value)
     return dato = cc.join('');
  },

};
