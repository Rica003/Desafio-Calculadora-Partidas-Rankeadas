const prompt = require('prompt-sync')();

let playerName;
let vitorias;
let derrotas;
let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendario", "Imortal"];

function calcularRank(vitoria, derrota){
    let calcular = vitoria - derrota;
    return calcular;
}

let x;
while(x !== 0){
    playerName = prompt("Digite o nome do seu Herói: ");
    vitorias = parseInt(prompt("Digite a quantidade de Vitórias que vc tem: "));
    derrotas = parseInt(prompt("Digite a quantidade de Derrotas que vc tem: "));

let saldoVitorias = calcularRank(vitorias, derrotas);

if(saldoVitorias < 10){
    console.log("O Herói: " + playerName + " " + "tem saldo de: " + saldoVitorias + " " + "está no nivel de: " + nivel[0]);
}

else if(saldoVitorias > 10 && saldoVitorias < 21){
    console.log("O Herói: " + playerName + " " + "tem saldo de: " + saldoVitorias + " " + "está no nivel de: " + nivel[1]);
}

else if(saldoVitorias > 20 && saldoVitorias < 51){
    console.log("O Herói: " + playerName + " " + "tem saldo de: " + saldoVitorias + " " + "está no nivel de: " + nivel[2]);
}

else if(saldoVitorias > 50 && saldoVitorias < 81){
    console.log("O Herói: " + playerName + " " + "tem saldo de: " + saldoVitorias + " " + "está no nivel de: " + nivel[3]);
}

else if(saldoVitorias > 80 && saldoVitorias < 91){
    console.log("O Herói: " + playerName + " " + "tem saldo de: " + saldoVitorias + " " + "está no nivel de: " + nivel[4]);
}

else if(saldoVitorias > 90 && saldoVitorias < 101){
    console.log("O Herói: " + playerName + " " + "tem saldo de: " + saldoVitorias + " " + "está no nivel de: " + nivel[5]);
}

else if(saldoVitorias >= 101){
    console.log("O Herói: " + playerName + " " + "tem saldo de: " + saldoVitorias + " " + "está no nivel de: " + nivel[6]);
}

}