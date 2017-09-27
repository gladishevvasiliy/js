/*

var calculator = {
  numFirst:0,
  numSec:0,

}

calculator.read();

alert( calculator.sum() );
alert( calculator.mul() );

*/

/*
alert(sum(1)(2)); // 1 + 2
alert(sum(1)(2)(3)); // 1 + 2 + 3
alert(sum(5)(-1)(2));
alert(sum(6)(-1)(-2)(-3));
alert(sum(0)(1)(2)(3)(4)(5));

function sum(a) {

  var currentSum = a;

  function f(b) {
    currentSum +=b;
    return sum(currentSum);
  };

  f.toString = function() {
    return currentSum;
  };
  return f;
}
*/

/*
function Calculator(){
  this.read = function() {
    this.a = +prompt('a?',0);
    this.b = +prompt('b?',0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

var calculator = new Calculator();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );

*/

var accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert( accumulator.value ); // выведет текущее значение

function Accumulator(startValue) {
  this.value = startValue;

  this.read = function () {
    this.value += +prompt('Введите число для добавления', 0);
  };

}
