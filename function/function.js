function greetSleep(velocidade,acelerar){
 newVelocidade = velocidade + acelerar
 console.log("A nova velocidade é " + newVelocidade)
}
greetSleep(60,10)
greetSleep(100,100)
//de acordo com o moço do video os parametros viraram tipo uma nova variavel que e acrescentado o valor ali em baixo
//pode ser chamado varias vezes com valores diferentes
//LEMBRAR QUE VARIAVEIS USADAS EM FUNÇÃO NÃO E ACESSIVEL FORA DELA



function mensagem(nome,message = "Olá"){
console.log(message + ", " + nome)    
   }
mensagem("Seja bem vindo ", "Jorge")

//sei que tu vai ficar em duvida quando olhar aquela virgula mas ela ta só separando a frase mesmo
//esse = olá que ta ali é um valor padrão do parametro, quer dizer que se não for adicionado outro valor a message la na parte de baixo
//o que vai ser imprimido é o Olá



// function soma(a, b) {
//     return a + b;
// }

// var resultado = soma(3, 4);

//o return volta imediatamente para onde a função está sendo chamado no caso resultado


let goblal = "Aguamenti"

function mudar(){
    global = "Mudou otário"
}
 
console.log(global)

mudar()

console.log(global)