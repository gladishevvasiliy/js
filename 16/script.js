/* function makeCounter() {
  var currentCount = 1;

  return function() {
    return currentCount++;
  };
}

var counter = makeCounter();

alert( counter() );
alert( counter() );
alert( counter() );

var counter2 = makeCounter();
alert( counter2() );
*/

/*
function sum(a) {
  return function (b){
    return a + b;
  };

}

alert( sum(1)(2) );
*/

/*
function makeBuffer() {
  var buff = [];

  function buffer() {
    if (arguments.length == 0){
      return buff.join(' ');
    }
    buff.push(arguments[0]);
  };

  buffer.clear = function() {
    buff = [];
  }

  return buffer;
};

var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
alert( buffer() );

buffer.clear();

alert( buffer() );
*/

/*
var users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];


users.sort(byField('name'));
users.forEach(function(user) {
  alert( user.name );
}); // Вася, Маша, Петя

users.sort(byField('age'));
users.forEach(function(user) {
  alert( user.name );
}); // Маша, Вася, Петя


function byField(field) {
  return function (a, b) {
    return a[field] > b[field] ? 1 : -1;
  }
}
*/


var arr = [1, 2, 3, 4, 5, 6, 7];

alert(filter(arr, function(a) {
  return a % 2 == 0
})); // 2,4,6

alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

alert( filter(arr, inArray([1, 11, 35, 3, 2, 10])) ); // 1,2

function filter(arr, func) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var val = arr[i]
    if ( func(val) ) {
      newArr.push(val);
    }
  }
  return newArr;
}

function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b
  };
}

function inArray(arr) {
  return function (x) {
    return arr.indexOf(x) != -1;
    //for (var j = 0; j < arr.length; j++) {
      //if (x == arr[j]) {
      //  return true;
      //}
    };
  }
