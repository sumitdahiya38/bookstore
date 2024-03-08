export default class Book {
  id: string;
  title: string;
  author: string;
  category: string;
  isDeleted: boolean;

  constructor(id: string, title: string, author: string, category: string) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.category = category;
    this.isDeleted = false;
  }
}