
/* Este codigo representa a un convertidor de monedas, en la cual se transforma todo desde peso chileno a otro tipo de divisas*/


function convertir()  {
    var valore = parseInt(document.getElementById("valor").value);
    var resultado  = 0;
    var dolar = 850;
    var euro = 900;
    var pesoArgentino = 80;
    var realBrasileño = 300;
    var pesoChileno = 1;
    if (document.getElementById("uno").checked){
        resultado = valore / dolar;
        alert("El cambio de Peso Chileno a Dolares es:$" + resultado.toFixed(2));
    }
    else if(document.getElementById("dos").checked){
        resultado = valore / euro;
        alert("El cambio de Pesos Chilenos a Euros es:" + resultado.toFixed(2));
    }

    if (document.getElementById("tres").checked){
        resultado = valore / pesoChileno;
        alert("El cambio de Pesos Chilenos a Pesos Chilenos es:" + resultado.toFixed(2));
    }

    else if(document.getElementById("cuatro").checked){
        resultado = valore / pesoArgentino;
        alert("El cambio de Pesos Chilenos a Pesos Argentinos es:" + resultado.toFixed(2));
    }

    else if(document.getElementById("cinco").checked){
        resultado = valore / realBrasileño;
        alert("El cambio de Pesos Chilenos a Reales Brasileños es:" + resultado.toFixed(2));
    }
    else{
        alert("Tienes que completar todos los requerimientos")
    }
}