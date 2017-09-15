// Exersize 1
/*function isEmpty(obj) {
  var counter = 0;
  for (var key in obj) {
    return false;
  }
  return true;
}

var schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); // false
*/

// Exersize 2

/*var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

var sum = 0;
for (var key in salaries) {
  sum += salaries[key];
}
alert( sum );
*/

// Exersize 3

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};
maxSalary = 0;
nameMax = ''
for (var key in salaries) {
  if (salaries[key] > maxSalary) {
    maxSalary = salaries[key];
    nameMax = key;
  }
}

alert(nameMax);
