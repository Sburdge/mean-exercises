
// function translate(letter) {
//   if ((letter === 'a') || (letter === 'e') || (letter === 'i') || (letter === 'o') || (letter === 'u') || (letter === 'y'))
//     return ((letter) + (letter) + ("o"));
//   else
//     return (letter);
// }
//
// console.log(translate("cow"));
//
// var myString = "";
//
// myString += newLetter;
// myString += anotherLetter;

//loop and creating new word



//for (statement 1; statement 2; statement 3) {
//code block to be executed
//}

function isVowel(letter) {

  if ((letter === 'a') || (letter === 'e') || (letter === 'i') ||
    (letter === 'o') || (letter === 'u') || (letter === 'y')) {
    return true;
  } else {
    return false;
  }
}

// "Parker"
//  012345
//   ^
//
//  myString[i] -> 'a'


    console.log(isVowel('e'));

function translate (myText) {
  var translatedtext (myText)
  for (var i=0; i < myText.length; i++) {
    var letter = myText[i];
    if (isVowel(letter)) {
      console.log(letter);
    } else {
      console.log(letter + 'o' + letter);
    }
  }
}

console.log(translate('sariah'));
