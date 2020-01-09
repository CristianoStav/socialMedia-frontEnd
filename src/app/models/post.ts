export default class Post {
  author: string;
  thumbAuthor: string;
  date: Date;
  description: string;
  likes: Array<string>;
  comments: Array<string>;
  photo: string;
  liked?: boolean;
}
