//var goods = [1, 2, 3, 4, 'last'];
//alert(goods[goods.length - 1]);
//goods.push("LOOOOOL");
//alert(goods);


/*
var styles = ["Блюз", "Джаз"]
alert(styles);
styles.push("Рок-н-Ролл")
alert(styles);
styles[1] = "Классика";
alert(styles);
alert(styles.shift());
styles.unshift("Рэп", "Рэгги");
alert(styles);
*/

/*var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
var min = 0;
var max = arr.length - 1;

var rand = min + Math.floor(Math.random() * (max + 1 - min));
alert(arr[rand]);*/

/* var arr = [];
var sum = 0;

for (var i = 0;;i++){

  input = prompt();
// input = null ||
  if (input == '' || input == null || isNaN(+input) ) {
    alert(sum);
    break;
  } else {
    sum = sum + +input;
  }

}*/

/*var arr = [10, 1, 3.45, 5, 4, 3, 8, 0];

var filtered = filterRange(arr, 3, 5);
alert(filtered);
alert(arr);
// теперь filtered = [5, 4, 3]
// arr не изменился

function filterRange(arr, a, b){
  var filtered = [];
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      filtered.push(arr[i]);
    }
  }
  return filtered;
}*/

/*
arr = ["test", 2, 1.5, false];

alert( find(arr, "test") ); // 0
alert( find(arr, 2) ); // 1
alert( find(arr, 1.5) ); // 2

alert( find(arr, 0) ); // -1

function find(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value){
      return i;
    }
  }
  return -1;
}*/

var arr = []
for (var i = 0; i < 99; i++){
  arr[i] = i+2;
}
alert(arr);

var primeArr = [];
p = arr[0];


while (p*p < 100) {
  primeArr.push(p);
  alert("Число: " + p);
  var newArr = []
  for (var i = 0; i <= 100; i++) {
    if ((arr[i] % p) != 0) {
      newArr.push(arr[i]);
    }
  }
  alert(newArr);
  arr = newArr;
  p = arr[0];

}

alert(p*p);
alert(arr);

//merge
var sum = 0;
for (var i = 0; i < arr.length; i++) {
  primeArr.push(arr[i]);
  if !(isNaN(primeArr[i]){
    sum = sum +primeArr[i];
  }
}

alert(sum);
alert(primeArr)
