var array = [0, 1,];
var MAX =1000;

var newValue = array[1] + array [0];
array.push(newValue);

for (var i = array.length - 1; array.length <MAX; i++) {
  var newValue = array[i] + array[i -1];
  array.push(newValue);
}

console.log(array);

for (COUNTERS; CONDITION; POST-EXECUTION ) [
  //BODY
];

while(CONDITION) {
  //BODY
}

do {
  //BODY
} while(CONDITION);

var j = 0;
while (j < array.length) {
  console.log(array[j]);
  j = j + 1;
}

//OBJECTS:

var array = [1, 2, 3, 4, 5];
var object = {
  'nodejs': 'The most awesomest thing since sliced bread',
  'happySumo': 'A yummy japanese restaurant'
};

console.log(object['nodejs']);

console.log(object.nodejs);

console.log(object['happySumo']);

//for (COUNTER; EXPRESSION; POST EXECUTION) {
//
//}

for (var i in object) {
  console.log(object[i]);
}
//you can store multiple keys in objects, the keys in this one are
//node.js and happySumo
//essentially you could store details on a whole person for example
//name, age, job, etc. you can retrieve that info using the keys
