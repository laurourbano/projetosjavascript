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

    var pesoEhValido = true;
    var alturaEhValida = true;

    if(peso <= 0 || peso >= 500){
        pesoEhValido = false;
        tdPeso.textContent = "Peso inválido!";
    }
    if(altura <= 0 || altura >= 3.00){
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

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}