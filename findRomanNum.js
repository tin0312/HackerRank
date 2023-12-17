/*

Given an array of object of values and their coressponding Roman numerals
Convert the number to Roman numerals

*/

function convertToRoman(num) {
  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let result = "";

  for (const numeral of romanNumerals) {
    // the greater case handle the undefined roman numeral
    while (num >= numeral.value) {
      result += numeral.numeral;
      // calculate the difference and implement another search
      num -= numeral.value;
    }
  }

  return result;
}

console.log(convertToRoman(36));
