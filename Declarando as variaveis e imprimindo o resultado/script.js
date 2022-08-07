/*
    Desafio 7 Days Of Code
*/

let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = '30';
let stringTrinta = '30';
let numeroDez = 11;
let stringDez = '10';

document.getElementById("titulo").innerHTML = 'Comparando variáveis com JavaScript: ';

document.getElementById("variavel").innerHTML = `Variável numeroUm = ${numeroUm} <br> Variável stringUm = '${stringUm}'`;
document.getElementById("variavel2").innerHTML = `<br>Variável numeroTrinta = '${numeroTrinta}' <br> Variável stringTrinta = '${stringTrinta}'`;
document.getElementById("variavel3").innerHTML = `<br>Variável numeroDez = ${numeroDez} <br> Variável stringDez = '${stringDez}'`;


//document.getElementById("res1").innerHTML = `As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes. Uma é do tipo inteiro e a outra do tipo String`;


// Comparando se as variaveis tem o mesmo valor e se são identicas em tipo

if ((numeroUm == stringUm) && (numeroUm !== stringUm)) {

    //mostrando o resultado no html
    document.getElementById("res1").innerHTML = `As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes. Uma é do tipo inteiro e a outra do tipo String`;
    //mostrando o resultado no console
    console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes. Uma é do tipo inteiro e a outra do tipo String');

  } else {

    //mostrando o resultado no html
    document.getElementById("res1").innerHTML ='As variáveis numeroUm e stringUm não tem o mesmo valor';
    //mostrando o resultado no console
    console.log('As variáveis numeroUm e stringUm não tem o mesmo valor');

  }

  if ((numeroTrinta == stringTrinta) && (numeroTrinta === stringTrinta)) {
    //mostrando o resultado no html
    document.getElementById("res2").innerHTML = 'As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo. As duas são strings';
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo');
  } else {
    //mostrando o resultado no html
    document.getElementById("res2").innerHTML ='As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo.';
    console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo.');
  }

  if ((numeroDez == stringDez) && (numeroDez !== stringDez)) {
    //mostrando o resultado no html
    document.getElementById("res3").innerHTML = 'As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes.';
    console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes.')
  } else {
    //mostrando o resultado no html
    document.getElementById("res3").innerHTML = 'As variáveis numeroDez e stringDez não tem o mesmo valor.';
    console.log('As variáveis numeroDez e stringDez não tem o mesmo valor.')
  }