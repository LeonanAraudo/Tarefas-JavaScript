let hitchedSpaceships = [
  ['Fenix',8,true],
  ['Golias',10,true],
  ['Helmet',5,false],
  ['Elemental',3,true],
  ['Darwin',15,false],    
]
let filtro = hitchedSpaceships.filter(function(nave) {
return nave[1] >= 9;
}).map(function(nave) {
return nave[0];
});

let engate = hitchedSpaceships.findIndex(function(nave){
let enga = nave[2] == false;
return enga
});

let nomes = hitchedSpaceships.map(function(nave){
return nave[0].toUpperCase();
});

console.log('Naves com mais de 9 tripulantes: ' + filtro + '\nPrimeira nave sem engatar esta na posição: ' + (engate + 1) + '\nE o nome de todas as naves é: ' + nomes);
