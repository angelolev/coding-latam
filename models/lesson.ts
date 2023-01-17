import { IUser } from "./user";

export interface ILesson {
  id: number;
  type: string;
  description: string;
  link: string;
  title: string;
  urlVideo: string;
  questions?: IQuestion[];
}

export interface IQuestion {
  uid?: string;
  id: string;
  title: string;
  likes: number;
  comments?: IComment[];
}

export interface IComment {
  id: string;
  description: string;
  user: IUser;
}
