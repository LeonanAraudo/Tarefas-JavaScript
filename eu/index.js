let nome = prompt("Qual o nome do piloto?");
let initi = 0
let veloci = prompt("Qual a velocidade desejada de aceleração da nave " + nome + "?");
let confirma = confirm("A nave decola a " + veloci + " km/h ta certo isso mano?");

if (confirma) {
 initi = veloci
} 
    if(veloci <= 0){
        alert("ta paradooo")
    }
    else if (veloci < 40) {
        alert("Lerdo, aumenta aí!");
    } else if (veloci <= 80) {
        alert("Arrasou!");
    } else if (veloci <= 100 ) {
        alert("Reduz aí, parceiro!");
    } else {
        alert("Tá doidão, vai bater!");
    }


    alert("A nave decola a " + veloci + "/n km/h lacrou");


    