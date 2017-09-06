var userName = prompt('Who are you?', '');

if (userName == 'Admin') {

    var pass = prompt('Enter password:', '');

    if (pass == 'admin') {
      alert( 'Welcome!' );
    } else if (pass == null) {
      alert( 'Enter canceled' );
    } else {
        alert( 'Password is wrong' );
    }

} else if (userName == null) {
  alert( 'Enter canceled' );

} else {

  alert( 'I do not know you' );
}
