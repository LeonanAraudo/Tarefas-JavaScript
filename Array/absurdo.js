let absurdo = ['chatGPT','Calistenia','peste']

absurdo.forEach(function(nome,index) {
console.log('Nome :' + nome + '/nIndice: ' + index)
 }
 )
 //ficou lindo o nome pucha a string e o index pucha a posição ficou uma forma organizada de exibição
//forEach ele percorre o array e chama o callback que declaramos no caso a function, para cada elemento do array ele não altera o array






let absurdo2 = ['chatGPT','Calistenia','peste']

let mape = absurdo2.map(function(nome) {
let upcode = nome.toUpperCase()
return upcode
 }
 )
 console.log(mape)

 //o map vai percorrer o array vai transformar ele mas não vai alteralo, e esse toUpperCase so deixa as letras maiusculas







 let absurdo3 = ['chatGPT','Calistenia','peste']

let maior7 = absurdo.filter (elemento => {return elemento.length >= 7})
console.log(menor7)

//como o nome ja diz ele vai filtrar as coisa do array nesse exenplo ai ele pega e exibe so os com 7 ou mais caracteres,ele cria um novo array
//o filtro vai funcionar como um if else se a condição for cumprida e inserido dentro do novo array se não e descartado
 







let absurdo4 = ['chatGPT','Calistenia','peste']

let maior77 = absurdo.find (elemento => {return elemento.length >= 7})
console.log(menor7)
//a mesma coisa do filter so que ele so retorna o primeiro item que satisfaça a condição
