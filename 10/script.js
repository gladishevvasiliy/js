
/*
function ucFirst(str) {
  return (str.charAt(0).toUpperCase()) + str.substr(1);

}

alert( ucFirst("") );
*/

function checkSpam(str){
      return (
      (str.toLowerCase()).indexOf("viagra") != -1 ||
      (str.toLowerCase()).indexOf("xxx") != -1)
}

alert(checkSpam('viagra'));
