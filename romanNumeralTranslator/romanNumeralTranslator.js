/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */
// I: romanNumeral as a string
// O: romanNumeral converted to a number
// C:
// E: if romanNumeral not a string return null, if smaller RN appears before a larger RN subtract  

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
  // make string result variable
  var result = "";
  // iterate over the string
  for (var i = 0; i < romanNumeral; i++){
    // if the romanNumber at the index is less than the next romanNumber
    if (romanNumeral[i] < romanNumeral[i-1]) {
      //subtract the number from the next romanNumber 
      result = romanNumeral[i] -= romanNumeral[i-1]
      //if the romanNumber at the index is greater than the next roman Numeral 
    }else if (romanNumeral[i] > romanNumeral)
      //add the romanNumbers and return a number
      


    }

  }

  // return a number
};
