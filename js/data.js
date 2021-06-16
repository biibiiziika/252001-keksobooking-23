import {
  getRandomPositiveFloat, getRandomArrayUniqElements, getRandomArrayElement, getRandomPositiveInteger
} from './util.js';

const ADVERTS_COUNT = 10;

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

const adverts = new Array(ADVERTS_COUNT).fill(null).map(
  (value, index) => createAdverts(index + 1),
);

export { adverts };
