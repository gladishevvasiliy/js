var num = 1;

function isInteger(num){
  if ((num ^ 0) == num){
    return true;
  }
  else {
    return false;
  }
}

alert(isInteger(num));
