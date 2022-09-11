import { City } from './city.enum.js';
import { Coordinates } from './coordinates.type.js';
import { Facilites } from './facilities.type.js';
import { OfferType } from './offer-type.enum.js';
import { User } from './user.type.js';

export type Offer = {
  title: string,
  description: string,
  postDate: Date,
  city: City,
  preview: string,
  photos: string[],
  isPremium: boolean,
  rating: number,
  type: OfferType,
  rooms: number,
  guests: number,
  price: number
  facilities: Facilites[],
  user: User,
  comments: number,
  coordinates: Coordinates
}
