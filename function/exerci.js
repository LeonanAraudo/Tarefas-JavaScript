const nome = prompt("Digite o nome da nave");
let velocidade = 0;
let newVelocidade = ""

function menuInit(){
let menu = prompt("O que deseja fazer \n 1-Acelerar a nave em 5 km/h \n 2-Desacelerar a nave em 5 km/h \n 3-Imprimir dados de bordo \n 4- Encerrar")
return menu
}
let opcao = menuInit()

 while(opcao != "1"  && opcao != "2" && opcao != "3" && opcao != "4"){
    alert("Opção invalida")
   opcao = menuInit()
 }
 

function acelerar(){
   let newVelocidade = 0
  newVelocidade = velocidade + 5
   return newVelocidade
}
 
let mais = acelerar()

while(opcao == "1"){
    mais
    opcao = menuInit()
}

if(opcao == "3"){
alert("A nave " + nome + " está a " + newVelocidade)
}






