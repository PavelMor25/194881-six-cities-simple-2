import { UserType } from '../../types/user-type.enum.js';
import {User} from '../../types/user.type.js';
import typegoose, {getModelForClass, defaultClasses} from '@typegoose/typegoose';
import {createSHA256} from '../../utils/common.js';

const {prop, modelOptions} = typegoose;

export interface UserEntity extends defaultClasses.Base {}

export class UserEntity extends defaultClasses.TimeStamps implements User {
  constructor(data: User) {
    super();

    this.email = data.email;
    this.avatar = data.avatar;
    this.name = data.name;
    this.type = data.type;
  }

  @prop({ unique: true, required: true })
  public email!: string;

  @prop({required: false, default: ''})
  public avatar!: string;

  @prop({required: true, default: ''})
  public name!: string;

  @prop({required: false, default: 'Standart'})
  public type!: UserType;

  @prop({required: true, default: ''})
  private password!: string;

  public setPassword(password: string, salt: string) {
    this.password = createSHA256(password, salt);
  }

  public getPassword() {
    return this.password;
  }
}

export const UserModel = getModelForClass(UserEntity);
