// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

function getRandomPositiveInteger (a, b) {
  // Чтобы не заставлять пользователя нашей функции помнить порядок аргументов,
  // реализуем поддержку передачи минимального и максимального значения в любом порядке,
  // а какое из них большее и меньшее вычислим с помощью Math.min и Math.max.

  // После нам нужно убедиться, что пользователь не передал дробные значения,
  // для этого на всякий пожарный случай нижнюю границу диапазона
  // мы округляем к ближайшему большему целому с помощью Math.ceil,
  // а верхнюю границу - к ближайшему меньшему целому с помощью Math.floor
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  // Обратите внимание, чтобы учесть условие, что диапазон может быть [0, ∞),
  // мы не ругаем пользователя за переданное отрицательное число,
  // а просто берём его по модулю с помощью Math.abs

  // Дальше используем Math.random() для получения случайного дробного числа в диапазоне [0, 1),
  // которое домножаем на разницу между переданными числами плюс единица - это будет наша случайная дельта.
  // После нужно сложить дельту с минимальным значением, чтобы получить итоговое случайное число.
  const result = Math.random() * (upper - lower + 1) + lower;
  // "Плюс единица", чтобы включить верхнюю границу диапазона в случайные числа

  // И в конце с помощью метода Math.floor мы округляем полученный результат,
  // потому что Math.random() генерирует только дробные числа и ноль.
  return Math.floor(result);
}

function getRandomPositiveFloat (a, b, digits = 1) {
  // Чтобы не заставлять пользователя нашей функции помнить порядок аргументов,
  // реализуем поддержку передачи минимального и максимального значения в любом порядке,
  // а какое из них большее и меньшее вычислим с помощью Math.min и Math.max
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  // Обратите внимание, чтобы учесть условие, что диапазон может быть [0, ∞),
  // мы не ругаем пользователя за переданное отрицательное число,
  // а просто берём его по модулю с помощью Math.abs

  // Дальше используем Math.random() для получения случайного дробного числа в диапазоне [0, 1),
  // которое домножаем на разницу между переданными числами - это будет наша случайная дельта.
  // После нужно сложить дельту с минимальным значением, чтобы получить итоговое случайное число.
  const result = Math.random() * (upper - lower) + lower;

  // И в конце с помощью метода toFixed любого числа в JavaScript
  // указать требуемое количество знаков после точки
  return result.toFixed(digits);
}

const ADVERT_COUNT = 10;

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const getRandomArrayUniqElements = (elements, length) =>
  [...elements.sort( () => .5 - Math.random() )].splice(0, length === 1 ? 1 : length -1);

const createAdverts = (index) => ({
  author: {
    avatar: `img/avatars/user${index > 9 ? index : `0${index}`}.png`,
  },
  offer: {
    title: 'Предложение',
    address: `${getRandomPositiveFloat(1, 10, 5)}, ${getRandomPositiveFloat(1, 10, 5)}`,
    price: getRandomPositiveInteger(1, 1000),
    type: getRandomArrayElement(TYPES),
    rooms: getRandomPositiveInteger(1, 10),
    guests: getRandomPositiveInteger(1, 10),
    checkin: getRandomArrayElement(TIMES),
    checkout: getRandomArrayElement(TIMES),
    features: getRandomArrayUniqElements(FEATURES, getRandomPositiveInteger(1, FEATURES.length)),
    description: 'Описание.',
    photos: getRandomArrayUniqElements(PHOTOS, getRandomPositiveInteger(1, PHOTOS.length)),
  },
  location: {
    lat: getRandomPositiveFloat(35.65000, 35.70000, 5),
    lng: getRandomPositiveFloat(139.70000, 139.80000, 5),
  },
});

const adverts = new Array(ADVERT_COUNT).fill(null).map(
  (value, index) => createAdverts(index + 1),
);
