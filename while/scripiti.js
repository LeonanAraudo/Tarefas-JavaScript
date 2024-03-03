let nomeNave = prompt("Digite o nome da nave")
let dobra = ""
let quantida = 0
dobra = prompt("Deseja entrar em uma dobra espacial?\n1-sim \n 2-não")

 while(dobra == "1"){
 dobra = prompt("Deseja entrar em outra dobra? \n 1-sim \n 2-não") 
quantida += 1
}
alert("A nave " + nomeNave + " entrou em " + quantida + " dobras espaciais")
