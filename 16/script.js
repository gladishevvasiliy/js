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
alert( buffer() ); // Тест тебя не съест

buffer.clear();

alert( buffer() ); // ""
