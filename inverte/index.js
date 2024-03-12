const nome = prompt("Digite o nome que deseja inverter")
let livre = ""

for(let i = nome.length - 1; i>= 0; i--){
    if(nome[i] == "e"){
        break
    }else{
        livre += nome[i]
    }

}
alert("O nome invertido é " + livre)
//o - 1 ali na declaração da variavel e por conta que a palavra inserida por exemplo GATO seria contado 0 1 2 3 
//logo quando pego pelo .length e transformado em número será 4, mas queremos o ultimo digito dele então 4 - 1 será o 3
//funcionará em qualquer outra palavra de tamanho diferente