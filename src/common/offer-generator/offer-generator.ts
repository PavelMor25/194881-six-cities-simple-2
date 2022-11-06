import dayjs from 'dayjs';
import { City } from '../../types/city.enum.js';
import { MockData } from '../../types/mock-data.type.js';
import { generateRandomValue, getRandomItem, getRandomItems } from '../../utils/random.js';
import { OfferGeneratorInterface } from './offer-generator.interface.js';


const MIN_ROOMS = 1;
const MAX_ROOMS = 8;

const MIN_GUESTS = 1;
const MAX_GUESTS = 10;

const MIN_RATING = 1;
const MAX_RATING = 5;

const MIN_LAT = 48;
const MAX_LAT = 55;

const MIN_LNG = 2;
const MAX_LNG = 10;

const MIN_PRICE = 100;
const MAX_PRICE = 100000;

const MIN_COMMENTS = 0;
const MAX_COMMENTS = 100;

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;

export default class OfferGenerator implements OfferGeneratorInterface {
  constructor(private readonly mockData: MockData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const postDate =  dayjs().subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day').toISOString();
    const city = Object.values(getRandomItem<City>(this.mockData.cities)).join(';');
    const preview = getRandomItem<string>(this.mockData.previews);
    const photos = getRandomItems<string>(this.mockData.photos).join(';');
    const isPremium = getRandomItem<boolean>([false, true]);
    const rating = generateRandomValue(MIN_RATING, MAX_RATING);
    const type = getRandomItem<string>(this.mockData.types);
    const rooms = generateRandomValue(MIN_ROOMS, MAX_ROOMS);
    const guests = generateRandomValue(MIN_GUESTS, MAX_GUESTS);
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE);
    const facilities = getRandomItems<string>(this.mockData.facilities).join(';');
    const comments = generateRandomValue(MIN_COMMENTS, MAX_COMMENTS);
    const lat = generateRandomValue(MIN_LAT, MAX_LAT, 5);
    const lng = generateRandomValue(MIN_LNG, MAX_LNG, 5);
    const name = getRandomItem<string>(this.mockData.names);
    const email = getRandomItem<string>(this.mockData.emails);
    const avatar = getRandomItem<string>(this.mockData.avatars);
    const typeUser = getRandomItem<string>(this.mockData.typeUsers);

    return [
      title,
      description,
      postDate,
      city,
      preview,
      photos,
      isPremium,
      rating,
      type,
      rooms,
      guests,
      price,
      facilities,
      comments,
      lat,
      lng,
      name,
      email,
      avatar,
      typeUser
    ].join('\t');
  }
}
