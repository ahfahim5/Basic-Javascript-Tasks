class Book{
  constructor(title,author,publicationYear){
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }
  displayBookDetails(){
    console.log(`Title; ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Publication year: ${this.publicationYear}`);
  }
}
class Ebook extends Book{
  constructor(title,author,publicationYear,price){
    super(title,author,publicationYear)
    this.price = price;
  }
  displayBookDetails(){
    super.displayBookDetails();
    console.log(`Price: ${this.price}`);
  }
}
const eBook = new Ebook ('Don Quixote', 'Miguel de Cervantes', 1605, 21.49);
eBook.displayBookDetails();