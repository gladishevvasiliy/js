/*
function f(x) {
  alert(arguments.length ? 1 : 0 );
}

f(undefined); // 1
f(); // 0
*/

alert(sum());
alert(sum(1));
alert(sum(1, 2));
alert(sum(1, 2, 3));
alert(sum(1, 2, 3, 4));

function sum() {
  var sum = 0;

  for (var i = 0; i < arguments.length; i++){
    sum += arguments[i];
  }
  
  return sum;
}
