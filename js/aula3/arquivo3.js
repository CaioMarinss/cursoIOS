// let nome = 'Aluno IOS Dev'
// let nomeNovo = nome.substring(2) //"quero que a partir da segunda casa, você armazene"
// let nomeSplit = nome.split(' ') // onde tem ' ' espaço, separe e guarde como um array
// console.log(nome.lenght);
// console.log(nomeNovo);
// console.log(nomeSplit);

frutasComM = ['Manga', 'Maçã', 'Maracujá', 'Mamão', 'Mexerica'];
console.log(frutasComM.length); //numero de itens no array

let nome = '     Caio    Marins     '
let nomeNovo = nome.replace('Caio', 'Marins') //o que era > o que vai virar

console.log(nomeNovo); //troca as palavras mas nao remove nenhum espaço

let nomeTrim = nomeNovo.trim() //remove os espaços antes e depois

console.log(nomeTrim);

console.log(nome.replace('Marins', 'Eu').trim().toUpperCase()); //da para usar varios metodos em seguida