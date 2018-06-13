window.cipher = {
//La funcion dentro del objeto se declara con dos puntos :
encode: (offset,string) => { //Función cifrar
    let newTextVal = newText.value; //Jalar el valor ingresado por el usuario
    let number = parseInt(newNumber.value); 
    let newNothing = "";   
    for(let i = 0; i < newTextVal.length; i++){         
        if(newTextVal[i].charCodeAt() == 32){ //Para espacio
            newNothing += newTextVal[i];
        }else if (newTextVal[i].charCodeAt() >= 65 && newTextVal[i].charCodeAt() <= 90){ //Para Mayúsculas
            let conAscii =newTextVal[i].charCodeAt();
            let formula = (conAscii - 65 + number)% 26 + 65;
            let aString = String.fromCharCode(formula);
            newNothing += aString;
        }else if (newTextVal[i].charCodeAt() >= 97 && newTextVal[i].charCodeAt() <= 122){ //Para Minúsculas
            let consAsciiMin = newTextVal[i].charCodeAt();
            let formulaMin = (consAsciiMin -97 + number)%26 + 97;
            let aStringMin = String.fromCharCode(formulaMin);
            newNothing += aStringMin;
        }        
    }
    total.value = newNothing;
    return newNothing;//Si se habla de funciones es forzoso que se devuelvan en un return
},
decode: (offset,string) =>{//Función descifrar
    let newTextDecode = newText.value; //Jalar el valor ingresado por el usuario
    let numberDecode = parseInt(newNumber.value); //Número del usuario
    let newNothing = ""; 
    for(let l = 0; l < newTextDecode.length; l++){
        if(newTextDecode[l].charCodeAt() == 32){//Espacio
            newNothing += newTextDecode[l];
        }else if(newTextDecode[l].charCodeAt() >= 65 && newTextDecode[l].charCodeAt() <= 90){ //Mayúsculas
            let mayAscii = newTextDecode[l].charCodeAt();
            let formulaDecode = (mayAscii - 65 - numberDecode)% 26 + 65;
            let decodeStringMay = String.fromCharCode(formulaDecode);
            newNothing += decodeStringMay;   
        }else if(newTextDecode[l].charCodeAt() >= 97 && newTextDecode[l].charCodeAt() <= 122){ //Minúsculas
            let minAscii = newTextDecode[l].charCodeAt();
            let minFormulaDecode = (minAscii -97 - numberDecode)% 26 +97;
            let decodeStringMin = String.fromCharCode(minFormulaDecode);
            newNothing += decodeStringMin;
        }
    }
    total.value = newNothing;
    return newNothing; //Las funciones siempre devuelven algo en return
}

};