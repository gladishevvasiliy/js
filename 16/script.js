function makeCounter() {
  var currentCount = 1;

  return function() { 
    return currentCount++;
  };
}

var counter = makeCounter();

alert( counter() ); // 1
alert( counter() ); // 2
alert( counter() ); // 3

var counter2 = makeCounter();
alert( counter2() ); // 1
