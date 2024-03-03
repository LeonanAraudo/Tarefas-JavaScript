// const momentMin = require("./moment.min")

let datePart = prompt("Digite a data de partida (formata DD/MM/YYYY)")

let departureDate = moment(datePart , "DD/MM/YYYY")
//Convertendo a entrada de dado do modo texto para o formato de data

let today = moment()

let dateDiff = today - departureDate
//diferença entre data de hj e data de partida da nave

let choseOption = prompt("escolha como gostaria de exibir o tempo de partida \n1-Segundos \n 2 Minutos \n 3-Horas \n 4-Dias")

if(choseOption == "1"){
    let secondOfDeparture = Math.round(dateDiff / 1000)
    //a biblioteca Math conta com o recurso round que arredonda um valor que ta quebrado
    alert("Tempo de vôo: " + secondOfDeparture + " segundos")
}else if(choseOption == "2"){
    let minutesOfDeparture = Math.round(dateDiff / 1000 / 60)
    alert("Tempo de vôo: " + minutesOfDeparture + " minutos")
}else if(choseOption == "3"){
    let hourOfDeparture = Math.round(dateDiff / 1000 / 3600)
    alert("Tempo de vôo: " + hourOfDeparture + " horas")
}else if(choseOption == "4"){
    let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24)
    alert("Tempo de vôo: " + daysOfDeparture + " dias")
}else{
    alert("opção invalida")
}
//os numeros dentro do if e caso a escolha seja 1 2 3 ou 4
//e como se datediff viesse em milesegundos ai começa convertando pra segundos que é dividir por 1000 depois divide por 60 que e a quantidade de segundos em um minuto
//uma hora tem 3600 segundos
//vai fazendo divisões seguindo o padrão de dia hora minutos
// pelo que entendi esses 1000 / 3600 ea conversão de segundos pra horas  é a mesma coisa de 1000 / 60 / 60 começa convertendo
// de segundo pra minuto depois(1000 / 60) depois de minuto 3600 são as horas
// logo dividir 3600 pra 24 que e um dia