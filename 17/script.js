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

/*

function work(a) {
  return a;
}

function makeLogging(f, log) {

  function wrapper(a) {
    log.push(a);
    return f.call(this, a);
  }
  return wrapper;
}

var log = [];
work = makeLogging(work, log);

work(1); // 1, добавлено в log
work(5); // 5, добавлено в log

for (var i = 0; i < log.length; i++) {
  alert( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
}
*/

/*
function work(a, b) {
  alert( a + b ); // work - произвольная функция
}

function makeLogging(f, log) {
  function wrapper() {
    for (var i = 0; i < arguments.length; i++){
      log.push(arguments[0]);
    }
    //log.push([].slice.call(arguments));
    return f.apply(this, arguments);
  }
  return wrapper;
}

var log = [];
work = makeLogging(work, log);

work(1, 2); // 3
work(4, 5); // 9

for (var i = 0; i < log.length; i++) {
  var args = log[i]; // массив из аргументов i-го вызова
  alert( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
}

*/

/*

function f(x) {
  return Math.random() * x; // random для удобства тестирования
}

function makeCaching(f) {
  var cache = {};

  return function(x) {
    if (!(x in cache)) {
      cache[x] = f.call(this, x);
    }
    return cache[x];
  };

}

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
alert( a == b ); // true (значение закешировано)

b = f(2);
alert( a == b ); // false, другой аргумент => другое значение

*/

/*
function formatDate(date) {
  if (typeof date == 'string') {
      var arr = date.split('-');
      return arr[2] + '.' + arr[1] + '.' + arr[0].slice(2);
  }
}

alert( formatDate('2011-10-02') ); // 02.10.11
*/

/*
var leader = {
  name: "Василий Иванович",
  age: 35
};

var str = JSON.stringify(leader);
var newLeader = JSON.parse(str);
*/

/*
var leader = {
  name: "Василий Иванович"
};

var soldier = {
  name: "Петька"
};

// эти объекты ссылаются друг на друга!
leader.soldier = soldier;
soldier.leader = leader;

var team = [leader, soldier];

var str = JSON.stringify(team);
alert(str);
*/



/*
printNumbersInterval();

function printNumbersInterval() {
  var i = 1;
  var timerId = setInterval(function() {
    console.log(i);
    if (i == 20) {
      clearTimeout(timerId);
    }
    i++;
  }, 100);
}

*/
/*
printNumbersInterval(1);

function printNumbersInterval(i){
  var timerId = setTimeout(function count() {
    console.log(i);
    if (i < 20) {
      setTimeout(count, 100);
    }
    i++;
  }, 100);
}
*/

/*

function f(x) {
  alert( x );
}

var f1000 = delay(f, 1000);
var f1500 = delay(f, 1500);

f1000("тест"); // выведет "тест" через 1000 миллисекунд
f1500("тест2"); // выведет "тест2" через 1500 миллисекунд

function delay(f, ms) {
  return function () {
    savedThis = this;
    savedArgs = arguments;

    setTimeout(function() {
      f.apply(savedThis, savedArgs);
    }, ms);
  }
}

*/


/*
function f(x) {alert(x)}

var f = debounce(f, 1000);

f(1); // выполнится сразу же
f(2); // игнор

setTimeout( function() { f(3) }, 100); // игнор (прошло только 100 мс)
setTimeout( function() { f(4) }, 1100); // выполнится
setTimeout( function() { f(5) }, 1500); // игнор

function debounce(f, ms) {
  var state = null;
  COOLDOWN = 1;

  return function () {

    if (state){
        return;
    }
    f.apply(this, arguments);

    state = COOLDOWN;
    setTimeout(function () {
      state = null;
    }, ms);
  }
}

*/

/*

var f = function(a) {
  alert(a);
};

// затормозить функцию до одного раза в 1000 мс
var f1000 = throttle(f, 1000);

f1000(1); // выведет 1
f1000(2); // (тормозим, не прошло 1000 мс)
f1000(3); // (тормозим, не прошло 1000 мс)

// когда пройдёт 1000 мс...
// выведет 3, промежуточное значение 2 игнорируется

function throttle(func, ms) {
  var isThorttled = false,
  savedThis,
  savedArgs;

  function wrapper() {

    if (isThorttled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);

    isThorttled = true;

    setTimeout(function () {
      isThorttled = false;
      if (savedArgs){
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }
  return wrapper;
}
*/

str = prompt();
alert( eval(str) );
