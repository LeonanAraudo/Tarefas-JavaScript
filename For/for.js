let space = "helmet"
let newSpace = ""
//diferente do while que só é possivel colocar uma expressão, dentro do for e possivel declarar uma variavel por uma
//expressão e adicionar uma ação
for(let i = 0; i < space.length; i++){
    console.log(space[i])
}

//nesse exemplo  esta declarando uma variavel i que vai executar enquanto i for menor que o tamanho de space
//esse i++ vai acrescentar mais um a variavel i a cada interação ele é a mesma coisa que i = i + 1
//esse space[i] ele ta pegando o que ta em space e usando o i pra dizer a posição é tipo um space[0] , space[1] , space[2]


let space1 = "helmet"
let newSpace2 = ""

for(let u = 0; u < space1.length; u++){
if(space1[u] == "e"){
    newSpace2 += "i"
}else{
    newSpace2 += space1[u]
}
}
console.log(newSpace2)
//nesse exenplo o if ta verificando se a letra em space1 e igual a e caso não seja vai para o else que apenas
//ignora e usa a letra ja existente no space1, agora caso seja a letra e o codigo vai executar e trocar pela letra i
//o for vai repetir ate que tenha percorrido toda a string helmet
