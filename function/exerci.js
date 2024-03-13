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
   newVelocidade = velocidade + 5
   return newVelocidade
}

function desacelerar(){
    velocidade = 5;
    newVelocidade = velocidade - 5
    return newVelocidade
 }
 
while(opcao == "1"){
    velocidade = acelerar()
    opcao = menuInit()
}
 
while(opcao == "2"){
  if(velocidade > 0){
    velocidade = desacelerar()
  }else{
    alert("A velocidade minima é 0")
  }
  opcao = menuInit()
}

if(opcao == "3"){
alert("A nave " + nome + " está a " + velocidade + "km/h")
}


//na resolução dele ao inves de varios whiles ele usou um switch dentro de um do while com cases de 1 2 ou 3
//e a condição dentro do while era que option !=4 ele fez mais algumas coisas lembra? como declarar uma variavel vazia
//adicionar velocidade nos parametros das function e antes do switch e depois do do ele colocou que a function
//que armazena o menu o meu caso o menuInit era igual a variavel vazia, depois colocou o nome dessa variavel vazia
//dentro da condição do switch






