let lista = ['Fernando', 1 ,true]; 

console.log(lista[2]);

let lista2 = new Array(crel)

console.log(lista2)
//a segunda lista não vai retornar nada se declarar apenas 1 coisa dentro dela e aconselhavel o uso apenas se vc quiser
//uma lista vazia de resto e melhor usar o que tem []

lista.push('caraca muleke'); //adciona ao final da array

lista.pop(); //remove o ultimo e tambem retorna o elemento retirado tipo ele imprime la qual era o ultimo mas tem que declarar uma variavel antes
//por exenplo let removed = lista.pop() e chamar essa variavel num console.log

lista.shift(); // remove o primeiro item e retorna ele tambem
lista.unshift('Golias'); // adiciona na primeira posição 
lista.indexOf('fernando'); //Retorna a posição do item procurado




let lista3 = [['Fernando', 10],['Kaka',2020],['Moto',22]]; 

console.log(lista3([2][0])) //aqui ele ta chamando a subarray na posição 2 e pegando o primeiro item dessa subarray






let lista4 = ['Fernando', 10,'Kaka',2020,'Moto']; 

let removed = lista4.splice(1,2,'cachorro','piranha') ;
//declarei a variavel só para armazenar os itens tirados mas pode fazer sem ela 
//o splice ali ta removendo os itens da posição 1 e 2 e acrescentando os valores entre aspas
//pode ser usado tambem apenas para remover valores especificos,
//pra fazer isso é so deixar os numeros entre os parenteses que funciona


let extract = lista4.slice(1,2);

//ele vai selecionar os itens na posição 1 e 2 e exibir apenas eles, o resto do array vai de arrasta


