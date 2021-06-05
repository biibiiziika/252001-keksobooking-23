// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntNumber (min, max) {
  if (min < 0 || max < min ){
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloatNumber (min, max, decimalPlaces) {
  if (min < 0 || max < min ){
    min = 0;
  }
  return (Math.random() * (max - min + 1) + min).toFixed(decimalPlaces);
}

getRandomIntNumber(1, 10);
getRandomFloatNumber(1, 10, 5);

