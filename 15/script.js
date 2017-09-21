/*
function f(x) {
  alert(arguments.length ? 1 : 0 );
}

f(undefined); // 1
f(); // 0
*/


/*
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

*/


/////////////////////// DATE /////////////////////////////

/*var date = new Date (2012, 1, 20, 3, 12);

alert(date);
*/
/*
var date = new Date(2012,0,3);  // 3 января 2012
alert( getWeekDay(date) );      // Должно вывести 'вт'
*/

/*
function getWeekDay(date) {
  var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  return days[date.getDay()];
}

*/

/*
function getLocalDay(date) {
  var day = date.getDay();

  if (day == 0) {
    day = 7;
  }
  return day;
}

alert (getLocalDay(new Date(2012, 0, 3)));
*/


/*
var date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 января 2015)
alert( getDateAgo(date, 2) ); // 31, (31 декабря 2014)
alert( getDateAgo(date, 365) ); // 2, (2 января 2014)

function getDateAgo(date, days) {
  var copyDate = new Date(date);

  copyDate.setDate(copyDate.getDate() - days);
  return copyDate.getDate();
}

*/

/*
function getLastDayOfMonth(year, month) {
  var date = new Date(year, month + 1, 0);
  return date.getDate();
}
alert( getLastDayOfMonth(2012, 1) );
*/

/*
alert(getSecondsToday());

function getSecondsToday() {
  var date = new Date();

  //return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
  return 3600 * 24 - date.getHours() * 3600 - date.getMinutes() * 60 - date.getSeconds();
}

alert(getSecondsToTomorrow());

function getSecondsToTomorrow() {
  var now = new Date()
  var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  var diff = tomorrow - now;
  return Math.round(diff / 1000);
}
*/

var d = new Date(2014, 0, 01); // 30 января 2014
alert( formatDate(d) ); // '30.01.14'

function formatDate(d) {
  dd = d.getDate();
  if (dd < 10) dd = '0' + dd;

  mm = d.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  yy = String(d.getFullYear()).substring(2);
  //yy = d.getFullYear();

  return dd + "." + mm + "." + yy;

}
