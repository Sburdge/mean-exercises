//function that takes an array of values and does some computations of your choosing to the array adn returns that array.

function filterArray(array, filterFunction) {
  var newArray = [];
  for (var i=0; i < array.length; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  }

var array2 = [ 1,2,3,4,5];

var product = array(array2, function(value) {
  return value + 5;
});

console.log(product);
