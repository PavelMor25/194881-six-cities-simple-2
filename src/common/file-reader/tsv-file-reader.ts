import { readFileSync } from 'fs';
import { City } from '../../types/city.enum.js';
import { OfferType } from '../../types/offer-type.enum.js';
import { Offer } from '../../types/offer.type.js';
import { UserType } from '../../types/user-type.enum.js';
import { FileReaderInterface } from './file-reader.interface.js';

export default class TsvFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public fileName: string) {}

  public read(): void {
    this.rawData = readFileSync(this.fileName, {encoding: 'utf-8'});
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      return [];
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(([title, description, postDate, city, preview, photos, isPremium, rating, type, rooms, guests, price, facilities, comments, lat, lng, name, email, avatar, password, typeUser]) => ({
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
      }));
  }
}
