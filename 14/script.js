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
