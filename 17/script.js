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

/*
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
*/
/*

function User(fullName) {
  this.fullName = fullName;

  Object.defineProperties(this, {

    firstName: {

      get: function() {
        return this.fullName.split(' ')[0];
      },

      set: function(newFirstName) {
        this.fullName = newFirstName + ' ' + this.lastName;
      }

    },

    lastName: {

      get: function() {
        return this.fullName.split(' ')[1];
      },

      set: function(newLastName) {
        this.fullName = this.firstName + ' ' + newLastName;
      }
    }

  });
}

var vasya = new User("Василий Попкин");

// чтение firstName/lastName
alert( vasya.firstName ); // Василий
alert( vasya.lastName ); // Попкин

// запись в lastName
vasya.lastName = 'Сидоров';

alert( vasya.fullName ); // Василий Сидоров

*/

/*

function Article() {
  this.created = new Date();
  Article.count++;
  Article.last = this.created;
}
Article.count = 0;

Article.showStats = function() {
  alert( 'Кол-во: ' + this.count + '\nДата последнего создания: ' + this.last );
}

new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)

*/
/*

function sum(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  });
}
*/
/*

alert( sum([1, 2, 3]) ); // 6 (=1+2+3)

function sumArgs() {
  arguments.reduce = [].reduce; // одолжили метод (1)
  return argument.reduce(function(a, b) {
    return a + b;
    });
}

alert( sumArgs(1, 2, 3) );

*/

/*

// Применить Math.max к аргументам 2, -2, 3
alert( applyAll(Math.max, 2, -2, 3) ); // 3

// Применить Math.min к аргументам 2, -2, 3
//alert( applyAll(Math.min, 2, -2, 3) ); // -2

function applyAll(func) {
  return func.apply(this, [].slice.call(arguments, 1));
}
*/

function work(a) {
  return a;
}

function makeLogging(f, log) {
  return function (a) {
    log.push(a);
    return f.apply(this, arguments);
  }
}

var log = [];
work = makeLogging(work, log);

work(1); // 1, добавлено в log
work(5); // 5, добавлено в log

for (var i = 0; i < log.length; i++) {
  alert( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
}
