function cifradoCesar() {
  let dato= document.getElementById('caja1').value;
  let dato2= document.getElementById('caja2');
  let dato3= document.getElementById('caja3');
  let ca = [];
  let cc = [];
  dato= dato.split('');

  for (let i = 0; i < dato.length; i++){
    let x = dato[i].charCodeAt(0)
    ca[i] = x
    ca[i] =(x-65+3)%26+65
    cc[i] = String.fromCharCode(ca[i]);
  }
  dato2.value=ca;
  dato3.value=cc.join('');
}
//comentario sin funcion
function cifradoCesarTwo() {
  let dato= document.getElementById('caja1');
  let dato2= document.getElementById('caja2');
  let dato3= document.getElementById('caja3').value;
  let ca = [];
  let cc = [];
  dato3= dato3.split('');

  for (let i = 0; i < dato3.length; i++){
    let x = dato3[i].charCodeAt(0)
    ca[i] = x
    ca[i] =(x-65-3)%26+65
    cc[i] = String.fromCharCode(ca[i]);
  }
  console.log(ca,cc)
  dato2.value=ca;
  dato.value=cc.join('');
}
