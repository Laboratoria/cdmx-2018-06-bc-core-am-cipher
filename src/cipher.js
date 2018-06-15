window.cipher = {
//La funcion dentro del objeto se declara con dos puntos :
encode: (offset,string) => { //Función cifrar
    let newTextVal = string; //Jalar el valor ingresado por el usuario
    let number = parseInt(offset); 
    let newNothing = "";   
    for(let i = 0; i < newTextVal.length; i++){         
        if(newTextVal[i].charCodeAt() == 32){ //Para espacio
            newNothing += newTextVal[i];
            console.log(newNothing)
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
    return newNothing;//Si se habla de funciones es forzoso que se devuelvan en un return
},
decode: (offset,string) =>{//Función descifrar
    let newTextDecode = string; //Jalar el valor ingresado por el usuario
    let numberDecode = parseInt(offset); //Número del usuario
    let newNothing = ""; 
    for(let l = 0; l < newTextDecode.length; l++){
        if(newTextDecode[l].charCodeAt() == 32){//Espacio
            newNothing += newTextDecode[l];
        }else if(newTextDecode[l].charCodeAt() >= 65 && newTextDecode[l].charCodeAt() <= 90){ //Mayúsculas
            let mayAscii = newTextDecode[l].charCodeAt();
            let formulaDecode = (mayAscii - 90 - numberDecode)% 26 + 90; //La formula empieza en 90 para tener un freno 
            let decodeStringMay = String.fromCharCode(formulaDecode);
            newNothing += decodeStringMay;   
        }else if(newTextDecode[l].charCodeAt() >= 97 && newTextDecode[l].charCodeAt() <= 122){ //Minúsculas
            let minAscii = newTextDecode[l].charCodeAt();
            let minFormulaDecode = (minAscii -122 - numberDecode)% 26 + 122;//Desde el ultimo número
            let decodeStringMin = String.fromCharCode(minFormulaDecode);
            newNothing += decodeStringMin;
        }
    }
    return newNothing; //Las funciones siempre devuelven algo en return
}
};