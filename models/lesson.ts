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
  id: string;
  title: string;
  comments?: IComment[];
}

export interface IComment {
  id: string;
  description: string;
}
