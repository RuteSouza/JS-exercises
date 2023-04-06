const chapa = 5;
const partidos = ['partido 1', 'partido 2', 'partido 3', 'partido 4', 'partido 5'];

var votos = [];
for (var i = 0; i < chapa; i++){
  var numeroPartido = i + 1;
  var nomePartido = partidos[i];
  var votosPorPartido = parseInt(prompt("Digite o numero de votos totais para o partido " + nomePartido + " (Número  da chapa " + numeroPartido + "):"));
  votos.push(votosPorPartido);
}

var votosTotais = votos.reduce(function(a, b){
  return a + b;}, 0);


var porcentagemVotos = [];
for (var i = 0; i < chapa; i++){
  var porcentagem = votos [i] / votosTotais * 100;
  porcentagemVotos.push(porcentagem);
}

console.log("resultados => ");
for (var i = 0; i < chapa; i++){
  var numeroPatido = i + 1;
  var nomePartido = partidos [i];
  console.log (nomePartido + ": " + votos[i] + " votos, " + porcentagemVotos[i].toFixed(2) + "%");
}

var votosMaximos = Math.max.apply (null, votos);
var indiceMaximo = votos.indexOf(votosMaximos);
var segundoMaisVotado = -1;
for (var i = 0; i < chapa; i++){
  if (i !=indiceMaximo && votos[i] > segundoMaisVotado){
    segundoMaisVotado = votos[i];
  }
}
if (votosMaximos / votosTotais < 0.5){
  console.log ("Vamos ter segundo turno.");
  
  console.log ("Os dois partidos do segundo turno serão:");
  
  console.log (partidos [indiceMaximo] + " com "+  votosMaximos + "votos, " + porcentagemVotos[indiceMaximo].toFixed(2) + "%");
  
  console.log (partidos[votos.indexOf(segundoMaisVotado)] + " com " + segundoMaisVotado + " votos, " + porcentagemVotos[votos.indexOf(segundoMaisVotado)].toFixed(2) + "%");
  
}
else{
  console.log("Não haverá segundo turno");
}