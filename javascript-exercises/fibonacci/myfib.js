var array = [0, 1,];
var MAX =1000;

var newValue = array[1] + array [0];
array.push(newValue);

for (var i = array.length - 1; array.length <MAX; i++) {
  var newValue = array[i] + array[i -1];
  array.push(newValue);
}

console.log(array);
