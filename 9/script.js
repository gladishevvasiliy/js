var firstNum = +prompt("Введите первое число:", '');
var secNum = +prompt("Введите первое число:", '');

if ( !isNaN(firstNum) &&  !isNaN(secNum) ) {
  alert (firstNum + secNum);
} else {
  alert("Введите корректные данные")
}
