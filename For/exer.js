let spaceName = prompt("Digite o nome da nave")
let caracte = prompt("Qual caractere do nome da nave você deseja substituir?")
let novoCaracte = prompt("E por qual caractere você deseja substituir?")
let novoNome = ""
for(i = 0;i < spaceName.length; i++){
    if(spaceName[i] == caracte){
     novoNome += novoCaracte
    }else{
        novoNome += spaceName[i] 
    }
}
alert("O novo nome da nave é " + novoNome)