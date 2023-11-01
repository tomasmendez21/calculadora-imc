function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value); // utilizamos parsefloat para que combierta la cadena en numerica y podamos hacer calculos
    var altura = parseFloat(document.getElementById("altura").value);// utilizamos getelementbyid para poder llamar la variable en el html 

    if (!isNaN(peso) && !isNaN(altura) && altura > 0) { // utilizamos isnan para poder ver si son valores numericos 
        var imc = peso / (altura * altura); // aqui ponemos la formula para saber el imc
        var interpretacion = interpretarIMC(imc); // utilizamos interpretacion para que ejecute el codigp sin compilarlo previamente 

        document.getElementById("resultado").innerHTML = "Su IMC es: " + imc.toFixed(2) + "<br>Interpretación: " + interpretacion; //primero llamamos la variable resultado de html para que en el se muestre el resultado de la operacion y agregamos tofixed para redondear el resultado 
    } else {
        document.getElementById("resultado").innerHTML = "Por favor, ingrese valores válidos para peso y altura.";// ponemos un else por si no se detecta un valor numerico muestre un mensaje
    }
}

function interpretarIMC(imc) {
    if (imc < 16) {
        return "Infrapeso severo";
    } else if (imc >= 16 && imc < 16.9) {
        return "Infrapeso moderado";
    } else if (imc >= 17 && imc < 18.4) {
        return "Infrapeso leve";
    } else if (imc >= 18.5 && imc < 24.9) { // aqui con varios if y else vamos organizando que depende el resultado muestre un mensaje en el cual se indique que tan bien o mal esta de icm 
        return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        return "Obesidad grado I (Moderada)";
    } else if (imc >= 35 && imc < 39.9) {
        return "Obesidad grado II (Severa)";
    } else {
        return "Obesidad grado III (Muy severa)";
    }
}