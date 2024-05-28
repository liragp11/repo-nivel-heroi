let nomeHeroi = "Lior dos Piores";
let xpHeroi = 60000;
const msgSaida = "O herói de nome " + nomeHeroi + " está no nível de ";

let listaNiveis = [
    ["Ferro", 0, 1000],
    ["Bronze", 1001, 2000],
    ["Prata", 2001, 5000],
    ["Ouro", 5001, 7000],
    ["Platina", 7001, 8000],
    ["Ascendente", 8001, 9000],
    ["Imortal", 9001, 10000],
    ["Radiante", 10001, Infinity]
];

for (let i = 0; i < listaNiveis.length; i++) {  // Condição de loop corrigida
    if (xpHeroi >= listaNiveis[i][1] && xpHeroi <= listaNiveis[i][2]) {
        console.log(msgSaida + listaNiveis[i][0]);
        break;
    }
}
