"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var result;
  var temp = original.value;
  var regexp = /^\s*([-+]?\d+(?:\.\d*)?(?:e[+-]?\d+(?:\.\d*)?)?)\s*(f(?:a(?:r(?:e(?:n(?:h(?:e(?:i(?:t)?)?)?)?)?)?)?)?|c(?:e(?:l(?:s(?:i(?:u(?:s)?)?)?)?)?)?)\s*$/i;

  var m = temp.match(regexp);

  if (m) {
    var num = m[1];
    var type = m[2];
    num = parseFloat(num);
    if (type[0] == 'c' || type[0] == 'C') {
      result = (num * 9/5)+32;
      result = result.toFixed(1)+" Farenheit"
    }
    else {
      result = (num - 32)*5/9;
      result = result.toFixed(1)+" Celsius"
    }
    converted.innerHTML = result;
    document.getElementById("converted").style.color = "#0000b3";
  }
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
    document.getElementById("converted").style.color = "red";
  }
}
