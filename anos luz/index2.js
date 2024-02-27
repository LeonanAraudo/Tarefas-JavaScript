let quaqui = prompt("Digite a distancia em anos luz")
let option = prompt("selecione a opção de conversão \n 1-Parsec \n 2-Unidade Aatronomica \n 3-Quilômetro")

let result = option

switch(result){
    case "1":
        let pac = (quaqui * 0.306601)
        alert("Distanciância em anos luz: " + quaqui + "\nA distancia em Parsec é: " + pac)
        break
    case "2":
        let au = (quaqui * 632441.1)
        alert("Distanciância em anos luz: " + quaqui + "\nA distância em Unidade Astronômica é:" + au)
        break
        case "3":
            let km = (quaqui * (Math.pow(10,12) * 9.5) )
            alert("Distanciância em anos luz: " + quaqui + "\nA distância em Quilômetros é: " + km)
            break
        default:
            alert("Distanciância em anos luz: " + quaqui + "\n Opção de conversão: Não identificada")
}