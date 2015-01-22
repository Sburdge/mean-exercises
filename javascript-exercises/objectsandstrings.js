var array = ('Samuel', 'Jackson', 52, 1955-05-25);

function person(array) {
  var rv = {};
  for (var i=0; i < array.length; ++i)
    if (array[i] !==undefined) rv[i] = array[i];
  return rv;
}
