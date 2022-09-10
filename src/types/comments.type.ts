import { User } from './user.type';

export type Comments = {
  text: string,
  postDate: Date,
  ratting: number,
  user: User
}
