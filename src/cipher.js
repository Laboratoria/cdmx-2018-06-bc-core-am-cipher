window.cipher = {
 encode:(dato,offset) => {

    let ca = [];
    let cc = [];
    offset=parseInt(offset.value);

    dato = dato.value.split('');

    for (let i = 0; i < dato.length; i++){
      let x = dato[i].charCodeAt(0)
      ca[i] =(x+65+ offset)%26+65
      cc[i] = String.fromCharCode(ca[i]);

    }
    //dato2.value=ca;

    dato3.value=cc.join('');
  console.log(cc.join(''))
},
  //comentario sin funcion
  decode:(dato3,offset) => {

    let ca = [];
    let cc = [];
    offset=parseInt(offset.value);
    dato3= dato3.value.split('');

    for (let i = 0; i < dato3.length; i++){
      let x = dato3[i].charCodeAt(0)
      ca[i] = x
      ca[i] =(x-65- offset)%26+65
      cc[i] = String.fromCharCode(ca[i]);
    }
    console.log(ca,cc)
    dato.value=cc.join('');
  },

};
