import { UserType } from '../types/user-type.enum.js';
import { OfferType } from '../types/offer-type.enum.js';
import { City } from '../types/city.enum.js';
import { Offer } from '../types/offer.type.js';

export const createOffer = (row: string) => {
  const tokens = row.replace('\n', '').split('\t');
  const [title, description, postDate, city, preview, photos, isPremium, rating, type, rooms, guests, price, facilities, comments, lat, lng, name, email, avatar, password, typeUser] = tokens;
  return {
    title,
    description,
    postDate: new Date(postDate),
    city: City[city as 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf'],
    preview,
    photos: photos.split(';'),
    isPremium: Boolean(isPremium),
    rating: Number.parseFloat(rating),
    type: OfferType[type as 'Apartment' | 'House' | 'Room' | 'Hotel'],
    rooms: Number.parseInt(rooms, 10),
    guests: Number.parseInt(guests, 10),
    price: Number.parseInt(price, 10),
    facilities: facilities.split(';').map((facilitie) => ({name: `${facilitie}`})),
    comments: Number.parseInt(comments, 10),
    coordinates: {
      lat: Number.parseFloat(lat),
      lng: Number.parseFloat(lng)
    },
    user: {
      name,
      email,
      avatar,
      password,
      type: UserType[typeUser as 'Standart' | 'Pro']
    }
  } as Offer;
};


export const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : '';
