let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("calculando...")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    
    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);
    
    resultado.innerHTML = `<p>${qtdTotalCarne/1000} Kilos de carne.</p>`
    resultado.innerHTML += `<p>${qtdTotalBebidas/2000} Litros de refrigerante.</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/472)} Latas de cerveja.</p>`

}

function carnePP(duracao){
    if (duracao >= 6) {
        return 650;
    }else{
        return 500;
    }
}
function cervejaPP(duracao){
    if (duracao >= 6) {
        return 2000;
    }else{
        return 1500;
    }
}
function bebidasPP(duracao){
    if (duracao >= 6) {
        return 1500;
    }else{
        return 1000;
    }
}