/*
We first create a table to store the numerals data in a Map<key,value>.
The keys represents the individual decimal place i.e
  0 = Units,
  1 = Tens ,
  2 = Hundreds,
  3  = Thousands etc.
The value is an array containing the corresponding 10 numerals
https://en.wikipedia.org/wiki/Roman_numerals#Standard_form

For large numbers 4000 and above, we are using the Vinculum system, in which conventional Roman numerals
were multiplied by 1,000 by adding a "bar" or "overline". Also for numbers multiplied by 1,000 to power 2
by adding a "double bar" or "double overline"
https://en.wikipedia.org/wiki/Roman_numerals#Vinculum
*/

const decimalRomans = {
  0: ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
  1: ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
  2: ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
  3: ['', 'M', 'MM', 'MMM', 'I̅V̅', 'V̅', 'V̅I̅', 'V̅I̅I̅', 'V̅I̅I̅I̅', 'I̅X̅'],
  4: ['', 'X̅', 'X̅X̅', 'X̅X̅X̅', 'X̅L̅', 'L̅', 'L̅X̅', 'L̅X̅X̅', 'L̅X̅X̅X̅', 'X̅C̅'],
  5: ['', 'C̅', 'C̅C̅', 'C̅C̅C̅', 'C̅D̅', 'D̅', 'D̅C̅', 'D̅C̅C̅', 'D̅C̅C̅C̅', 'C̅M̅'],
  6: ['', 'M̅', 'M̅M̅', 'M̅M̅M̅', 'I̿V̿', 'V̿', 'V̿I̿', 'V̿I̿I̿', 'V̿I̿I̿I̿', 'I̿X̿'],
  7: ['', 'X̿', 'X̿X̿', 'X̿X̿X̿', 'X̿L̿', 'L̿', 'L̿X̿', 'L̿X̿X̿', 'L̿X̿X̿X̿', 'X̿C̿'],
  8: ['', 'C̿', 'C̿C̿', 'C̿C̿C̿', 'C̿D̿', 'D̿', 'D̿C̿', 'D̿C̿C̿', 'D̿C̿C̿C̿', 'C̿M̿'],
  9: ['', 'M̿', 'M̿M̿']
}

exports.convertToRoman= (num) =>  {
  // Return error if the num value passed is an invalid number or less than 1 or greater than 2,200,000,000
  if (isNaN(num) || num < 1 || num > 2200000000) {
    return { error: 'Enter an integer from 1 to 2,200,000,000.' };
  }

  // Convert the number to an array of all characters called digits
  const digits = (`${num}`).split('');

  // The roman numeral string
  let romanString = '';

  // The decimal is initialized to the largest decimal place
  let decimal = digits.length - 1;

  // Loop through each digit from left to right i.e (number with largest decimal place to smallest decimal place)
  for (i = 0; i < digits.length; i++) {
    // Get the value of the digit at the decimal place.
    // append the roman numeral to the existing string
    romanString += decimalRomans[decimal][digits[i]];

    // decrement the decimal place before moving to the next digit
    decimal--
  }

  // return the roman numeral string
  return romanString;
}
