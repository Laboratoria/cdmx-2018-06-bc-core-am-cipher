let dato = document.getElementById('caja1');
let offset = document.getElementById('caja2');
let dato3 = document.getElementById('caja3');
//let dato4 = document.getElementById('caja3');
let dato5 = document.getElementById('caja1');
boton1 = document.getElementById("boton1")
//function () => {

//}return cipher.encode (dato.value,offset.value)
///const printEncode = () => {
//  let dato = dato.value
//  let offset = offset.value
  //dato3.innerHTML = cipher.encode(dato,offset)
  //console.log(printEncode)
//}
///dato4.value = cc.join('')
//dato5.value = cc.join('');

boton1.addEventListener("click", event => {
  let respuesta = window.cipher.encode(dato.value, offset.value)
  dato3.value = respuesta;
    //console.log(resultado)

})
