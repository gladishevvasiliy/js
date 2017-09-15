
/* exersise 9 addition 2 numbers

var firstNum = +prompt("Введите первое число:", '');
var secNum = +prompt("Введите первое число:", '');

if ( !isNaN(firstNum) &&  !isNaN(secNum) ) {
  alert (firstNum + secNum);
} else {
  alert("Введите корректные данные")
}*/


/*
alert( getDecimal(12.345) ); // 0.345
alert( getDecimal(1.2) ); // 0.2
alert( getDecimal(-1.2) ); // 0.2


function getDecimal(num){
  return ( num > 0 ? (num % 1) : (-num % 1) );
}*/

/*function fibBinet(n) {
  var phi = (1 + Math.sqrt(5)) / 2;
  return Math.round(Math.pow(phi, 77) / Math.sqrt(5) ); // Bad, becouse sqrt(5) - infiniti fraction
}

alert(fibBinet(77));*/

var min = 5,
  max = 10;

alert( Math.floor(min + Math.random() * (max + 1 - min)) );
