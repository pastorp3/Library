/* eslint-disable no-use-before-define, max-classes-per-file */

class Library {
  constructor() {
    this.myLibrary = [];
    this.cards = document.getElementById('lib-container');
  }

  showLibrary() {
    return this.myLibrary;
  }

  viewBooks() {
    this.clearCards();
    for (let i = 0; i < this.myLibrary.length; i += 1) {
      this.renderCard(this.myLibrary[i], i);
    }
  }

  deleteBook(event) {
    const index = event.target.value;
    this.myLibrary.splice(index, 1);
    this.viewBooks();
  }

  readBook(event) {
    const index = event.target.value;
    this.myLibrary[index].status = true;
    event.target.setAttribute('class', 'hidde-form');
  }
  
  addBookToLibrary(book) {
    this.myLibrary.push(book);
    this.viewBooks();
  }

  clearCards() {
    while (this.cards.firstChild) {
      this.cards.removeChild(this.cards.firstChild);
    }
  }

  renderCard(book, index) {
    const divCard = document.createElement('div');
    divCard.setAttribute('class', 'book-card');
    divCard.setAttribute('id', book.id);
    this.cards.appendChild(divCard);
    const h2 = document.createElement('h2');
    h2.textContent = book.title;
    const h3 = document.createElement('h3');
    h3.textContent = `Author:${book.author}`;
    const p = document.createElement('p');
    p.textContent = `Total pages:${book.pages}`;
    const b1 = document.createElement('button');
    b1.textContent = 'Delete';
    b1.setAttribute('value', index);
    b1.addEventListener('click', this.deleteCard.bind(this));
    b1.setAttribute('class', 'delete button');
    const b2 = document.createElement('button');
    b2.addEventListener('click', this.read.bind(this));
    b2.textContent = 'Read';
    b2.setAttribute('class', 'read button');
    b2.setAttribute('value', index);
    divCard.append(h2, h3, p, b1, b2);
  }

  deleteCard(event) {
    const index = event.target.value;
    this.myLibrary.splice(index, 1);
    this.viewBooks();
  }

  read(event) {
    const index = event.target.value;
    this.myLibrary[index].status = true;
    event.target.setAttribute('class', 'hidde-form');
  }
}
class Book {
  constructor(title, author, pages, numbook) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = numbook;
  }
}

function add() {
  if (formOn === 0) {
    form.classList.toggle('hidde-form');
    formOn = 1;
  } else {
    const book = new Book(input[0].value, input[1].value, input[2].value, booknum);
    form.classList.toggle('hidde-form');
    library.addBookToLibrary(book);
    formOn = 0;
  }
}
const library = new Library();
const addBook = document.getElementById('add');
const form = document.getElementsByTagName('form')[0];
const input = document.getElementsByClassName('input');
let formOn = 0;
let booknum = 0;
addBook.addEventListener('click', add);