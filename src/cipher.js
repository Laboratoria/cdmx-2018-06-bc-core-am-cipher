window.cipher = {

};

const textOneOne = () => {
    const enter = document.getElementById("theName").value.toUpperCase(); //Valor de entrada
    //console.log(enter); //Prueba de que se guarda el valor
    const number = parseInt(document.getElementById("theNumber").value); //Numero de la suerte
    //console.log(number); //Prueba de que se guarda number
    let ascii2 = "";
    for(let i =0; i<enter.length; i++) { 
        //console.log(enter[i]); //Prueba de que se imprime el valor
        let x = enter.charCodeAt(i);//Vuelve codigo ASCII
        //console.log(x);//Prueba que se ejecuta el charCodeAt  
        let ascii = ((x-65 + number)%26 + 65); //Formula de transformacion
        //console.log(ascii);
        ascii2 += String.fromCharCode(ascii);
    }
    //console.log(ascii2);
    const salida = document.getElementById("theTextTwo").value = ascii2; //Dando valor a input
}

