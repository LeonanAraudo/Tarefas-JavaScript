function desacelerar(velocidade,print){
    let desacelerar = 20
    while(velocidade > 0){
        print(velocidade)
        velocidade -= desacelerar
    }
    alert("Nave parada, as comportas podem ser abertas")
}

let spaceShipVelocity = 150

desacelerar(spaceShipVelocity,function(velocidade){
    console.log("A velocidade atual é " + velocidade)
})