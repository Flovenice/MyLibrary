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
    e.stopPropagation();
});

closeBtn.addEventListener('click', (e) => {
    modal.close();
    isModalOpen = false;
})

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addBookToLibrary(inputTitle.value, inputAuthor.value, inputPages.value);
    drawBookCards(myLibrary);
    modal.close();
    isModalOpen = false;
})

function drawBookCards(myLibrary) {
    myLibrary.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCardsContainer.append(bookCard);
        const bookTitle = document.createElement('h1');
        bookTitle.textContent = book.title;
        bookTitle.classList.add('book-title');
        bookCard.append(bookTitle);
        const bookCardContent = document.createElement('div');
        bookCard.append(bookCardContent);
        const bookCardList = document.createElement('ul');
        bookCardContent.append(bookCardList);
        const bookCardListAuthor = document.createElement('li');
        bookCardListAuthor.textContent = `Author: ${book.author}`;
        bookCardListAuthor.classList.add('book-author')
        const bookCardListPages = document.createElement('li');
        bookCardListPages.textContent = `Pages: ${book.pages}`;
        bookCardListPages.classList.add('book-pages')
        const bookCardListRead = document.createElement('li');
        bookCardListRead.textContent = `Readed: ${book.read ? 'Yes' : 'No'}`;
        bookCardListRead.classList.add('book-read');
        bookCardList.append(bookCardListAuthor);
        bookCardList.append(bookCardListPages);
        bookCardList.append(bookCardListRead);
        const readButton = document.createElement('button');
        readButton.textContent = 'I Read This!';
        readButton.classList.add('read-btn');
        bookCard.append(readButton);
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove Book';
        removeButton.classList.add('remove-btn');
        bookCard.append(removeButton);
    });
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages){
    const book = new Book(title, author, pages, false);
    myLibrary.push(book);
}