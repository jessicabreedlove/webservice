// this is a naive approach
// words are all lowercase
// if it starts with a vowel it appends -zay ["a", "e", "i", "o", "u"]
// onion -> onionzay
//a e i o u
// if it starts with a consonant it moves the first letter to the end and adds -ay
// ham -> amhay
// it doesn't consider compounds
// chat -> hatcay
function pigify(word) {
  let pigifiedWord = '';
  //if first letter in word === a || e || i || o || u {
  // append 'zay' to word
  //else index[0] and move to index[-1]
  console.log(word.charAt(0));
  if (word.charAt(0) == 'o') {
    pigifiedWord = `${word}zay`;
  } else {
    let movedLetter = word.substring(1);
    pigifiedWord = `${word}${movedLetter}ay`;
  }
  return pigifiedWord;
}

console.log(pigify('onion'));
console.log(pigify('ham'));
console.log(pigify('chat'));
