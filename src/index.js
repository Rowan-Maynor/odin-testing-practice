function capitalize(string) {
  let firstLetter = string[0].toUpperCase();
  return firstLetter + string.slice(1);
}

function reverseString(string) {
  let reverse = "";
  for (let i = string.length - 1; i > -1; i--) {
    reverse += string[i];
    console.log(reverse);
  }
  return reverse;
}

const calculator = {
  add: function (value1, value2) {
    return value1 + value2;
  },
  subtract: function (value1, value2) {
    return value1 - value2;
  },
  divide: function (value1, value2) {
    return value1 / value2;
  },
  multiply: function (value1, value2) {
    return value1 * value2;
  },
};

function caesarCipher(string, shift) {
  let charCodes = [];
  for (let i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      if (charCode + shift > 122) {
        charCode = charCode + shift - 26;
      } else {
        charCode = charCode + shift;
      }
    } else if (charCode >= 65 && charCode <= 90) {
      if (charCode + shift > 90) {
        charCode = charCode + shift - 26;
      } else {
        charCode = charCode + shift;
      }
    }
    charCodes.push(charCode);
  }
  return String.fromCharCode(...charCodes);
}

function analyzeArray(array) {
  let total = 0;
  let minResult = array[0];
  let maxResult = array[0];

  for (let i = 0; i < array.length; i++) {
    total += array[i];
    if (array[i] > maxResult) {
      maxResult = array[i];
    } else if (array[i] < minResult) {
      minResult = array[i];
    }
  }

  const results = {
    average: total / array.length,
    min: minResult,
    max: maxResult,
    length: array.length,
  };

  return results;
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
