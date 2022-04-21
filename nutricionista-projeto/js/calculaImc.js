var mensagemDeCarregamento = document.querySelector(".rodape");

mensagemDeCarregamento.textContent = "javascript do documento carregado com sucesso";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){
        pesoEhValido = false;
        tdPeso.textContent = "Peso inválido!";
    }
    if(!alturaEhValida){
        alturaEhValida = false;
        tdAltura.textContent = "Altura inválida!";
    }
    if(alturaEhValida && pesoEhValido){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    } else {
        tdImc.textContent = "Altura e/ou peso inválido(as)!";
        paciente.classList.add("paciente-invalido");
    }
}

function validaPeso(peso){
    if(peso > 0 && peso < 600){
        return true;
    }else {
        return false
    }
}

function validaAltura(altura){
    if(altura > 0 && altura < 3.00){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}