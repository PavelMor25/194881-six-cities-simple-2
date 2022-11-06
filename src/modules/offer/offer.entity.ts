import typegoose, {defaultClasses, getModelForClass, Ref} from '@typegoose/typegoose';
import { City } from '../../types/city.enum.js';
import { Coordinates } from '../../types/coordinates.type.js';
import { Facilites } from '../../types/facilities.type.js';
import { OfferType } from '../../types/offer-type.enum.js';
import { UserEntity } from '../user/user.entity.js';

const {prop, modelOptions} = typegoose;

export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  }
})

export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({trim: true, required: true})
  public title!: string;

  @prop({trim: true})
  public description!: string;

  @prop()
  public postDate!: Date;

  @prop()
  public city!: City;

  @prop()
  public preview!: string;

  @prop()
  public photos!: string[];

  @prop()
  public isPremium!: boolean;

  @prop()
  public rating!: number;

  @prop({
    type: () => String,
    enum: OfferType
  })
  public type!: OfferType;

  @prop()
  public rooms!: number;

  @prop()
  public guests!: number;

  @prop()
  public price!: number;

  @prop()
  public facilities!: Facilites[];

  @prop({
    ref: UserEntity,
    required: true
  })
  public userId!: Ref<UserEntity>;

  @prop()
  public comments!: number;

  @prop()
  public coordinates!: Coordinates;
}

export const OfferModel = getModelForClass(OfferEntity);
