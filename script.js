const myLibrary = [];
const addBookBtn = document.querySelector('.add-book-btn');
const readBtn = document.querySelector('.read-btn');
const removeBtn = document.querySelector('.remove-btn');
const bookCardsContainer = document.querySelector(".book-cards-container");
const modalBox = document.querySelector('.modal');
const modal = document.querySelector('dialog');
const closeBtn = document.querySelector('.close-btn');
const submitBtn = document.querySelector('.submit-btn');
const inputTitle = document.getElementById('book-title-input');
const inputAuthor = document.getElementById('book-author-input');
const inputPages = document.getElementById('book-pages-input');

let isModalOpen = false;

addBookBtn.addEventListener('click', (e) => {
    modal.showModal();
    isModalOpen = true;
});

closeBtn.addEventListener('click', (e) => {
    modal.close();
    isModalOpen = false;
})

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addBookToLibrary(inputTitle.value, inputAuthor.value, inputPages.value);
    modal.close();
    isModalOpen = false;
})

class Book {
    constructor(title, author, pages, read) {
        this.id = Date.now();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary(title, author, pages){
    const book = new Book(title, author, pages, false);
    myLibrary.push(book);
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCardsContainer.append(bookCard);
    bookCard.setAttribute('data-id', `${Date.now()}`);

    const bookTitle = document.createElement('h1');
    bookTitle.textContent = book.title;
    bookTitle.classList.add('book-title');
    bookCard.append(bookTitle);

    const bookCardContent = document.createElement('div');
    bookCard.append(bookCardContent);

    const bookCardList = document.createElement('ul');
    bookCardContent.append(bookCardList);

    for (let i = 0; i <= 2; i++) {
        const bookCardListElement = document.createElement('li');
        bookCardListElement.classList.add('book-list');
        switch (i) {
            case 0: bookCardListElement.textContent = `Author: ${book.author}`; 
            break;
            case 1: bookCardListElement.textContent = `Pages: ${book.pages}`;
            break;
            case 2: bookCardListElement.textContent = `Readed: ${book.read ? 'Yes' : 'No'}`;
            break;
        }
        bookCardList.append(bookCardListElement);
    }

    const readButton = document.createElement('button');
    readButton.textContent = 'I Read This!';
    readButton.classList.add('read-btn');
    bookCard.append(readButton);

    readButton.addEventListener('click', (e) => {
        bookCardList.lastChild.textContent = 'Readed: Yes';
    })

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove Book';
    removeButton.classList.add('remove-btn');
    bookCard.append(removeButton);

    removeButton.addEventListener('click', (e) => {
        bookCard.remove();
    })
}