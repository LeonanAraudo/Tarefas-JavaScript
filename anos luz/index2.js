let quaqui = prompt("Digite a distancia em anos luz")
let option = prompt("selecione a opção de conversão \n 1-Parsec \n 2-Unidade Aatronomica \n 3-Quilômetro")


let nome
let calculado
let result = option

switch(result){
    case "1":
        nome = "Parsec"
        calculado = (quaqui * 0.306601)
    case "2":
        nome = "Unidade Astronômica"
        calculado = (quaqui * 632441.1)
        break
        case "3":
            nome = "Quilômetro"
            calculado = (quaqui * (Math.pow(10,12) * 9.5) )
            break
        default:
            alert("Distanciância em anos luz: " + quaqui + "\n Opção de conversão: Não identificada")
}
alert("Distanciância em anos luz: " + quaqui + "\nA distância em " + nome + ": " + calculado)
