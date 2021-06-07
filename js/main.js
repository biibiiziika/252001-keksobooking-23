// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

function getRandomIntNumber (min, max) {
  if (min < 0 || max < min ){
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloatNumber (min, max, decimalPlaces) {
  return getRandomIntNumber(min, max).toFixed(decimalPlaces);
}

getRandomIntNumber(1, 10);
getRandomFloatNumber(1, 10, 5);
