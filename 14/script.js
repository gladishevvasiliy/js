/* var obj = {
  className: 'open menu'
}

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

alert( obj.className ); // "open menu new me"

function addClass(obj, cls) {
  var arr = ( obj.className.split(' ') );

  for (var i = 0; i < arr.length; i++) {
    if(arr[i] == cls) {
      return;
    }
  }

  arr.push(cls);

  obj.className = arr.join(' ');
}
*/

/*
alert( camelize("background-color") );
alert( camelize("-webkit-transition") );
alert( camelize("list-style-image") );

function camelize(str) {
  var words = str.split('-');

  for (var i = 0; i < words.length;i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join("");
}
*/

/*
obj = {
  className: 'my open menu menu'
};

removeClass(obj, 'menu');
alert( obj.className );
removeClass(obj, 'blabla'); // без изменений (нет такого класса)
alert( obj.className );


function removeClass(obj, cls) {
  var classes = ( obj.className.split(' ') );

  for (var i = 0; i < classes.length; i++) {
    if(classes[i] == cls) {
      classes.splice(i, 1);
      i--;
    }
  }

  obj.className = classes.join(" ");

}
*/

/*
arr = [5, 7, 1, 6, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);
alert( arr );

function filterRangeInPlace(arr, a, b) {

  for (var i = 0; i < arr.length; i++) {
    var val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

*/

/*
var arr = [4, 1, 14, -1, 81];

function compareReversed(a, b) {
  return b - a;
}

arr.sort(compareReversed);

alert( arr );

*/

/*
var arr = ["HTML", "JavaScript", "CSS"];

var arrSorted = arr.slice();
arrSorted.sort();

alert( arrSorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)

*/

/*
var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort( compareAge );

for(var i = 0; i < people.length; i++) {
  alert(people[i].name);
}

function compareAge(personA, personB) {
  return personA.age - personB.age;
}

*/

/*
var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

printList(list);

function printList(list) {
  var tmp = list;

  while (tmp) {
    alert(tmp.value);
    tmp = tmp.next;
  }
}

*/

/*
var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = arr.map(function(arr){
  return arr.length;
});

//var arrLength = [];
//for (var i = 0; i < arr.length; i++) {
//  arrLength[i] = arr[i].length;
//}

alert( arrLength ); // 4,5,2,5

*/

var arr = [ 1, 2, 3, 4, 5 ];

//getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]

function getSums( arr ) {
  var result = [];
  if (!arr.length) return result;

  var fullSum = arr.reduce(function(sum, current) {
    result.push(sum);
    return sum + current;
  });
  result.push(fullSum);

  return result;
}

alert(getSums( arr ));
