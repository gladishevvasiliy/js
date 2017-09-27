/*

var calculator = {
  numFirst:0,
  numSec:0,
  read: function() {
    this.a = +prompt('a?',0);
    this.b = +prompt('b?',0);
  },

  sum: function() {
    return this.a + this.b;
  },

  mul: function() {
    return this.a * this.b;
  }
}

calculator.read();

alert( calculator.sum() );
alert( calculator.mul() );

*/

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
