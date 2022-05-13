function accion(valor) {
    
    
    if (valor == "Limpiar"){
        document.getElementById("tResultado").value = "";
    } else if (valor == "Resultado") {
        document.getElementById("tResultado").value = eval(document.getElementById("tResultado").value);
    } else if (!isNaN(valor) || valor == "+" || valor == '-' || valor == '*' || valor == '/'){
        document.getElementById("tResultado").value += valor;


    }

function siete(){
    document.Calculadora.ans.value+='7'
}

function seis(){
    document.Calculadora.ans.value+='6'
}

function cinco(){
    document.Calculadora.ans.value+='5'
}

function cuatro(){
    document.Calculadora.ans.value+='4'
}

function siete(){
    document.Calculadora.ans.value+='3'
}

function siete(){
    document.Calculadora.ans.value+='2'
}

function siete(){
    document.Calculadora.ans.value+='1'
}

function siete(){
    document.Calculadora.ans.value+='0'
}

function ocho(){
    document.Calculadora.ans.value+='8'
}

function nueve(){
    document.Calculadora.ans.value+='9'
}