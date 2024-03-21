const hitchedSpaceships = [
    ['Fenix',8,true],
    ['Golias',10,true],
    ['Helmet',5,false],
    ['Elemental',3,true],
    ['Darwin',15,false],    
]
let filtro = hitchedSpaceships.filter(elemental => {return elemental >= 9  })

console.log(filtro);