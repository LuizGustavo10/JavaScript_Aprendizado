class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

class BookManager {
    constructor() {
        this.books = [];
        this.form = document.getElementById('book-form');
        this.list = document.getElementById('book-list');
        this.form.addEventListener('submit', this.addBook.bind(this));
    }

    addBook(event) {
        event.preventDefault();
        alert("tetste");

        const titleInput = document.getElementById('title');
        const authorInput = document.getElementById('author');

        const title = titleInput.value;
        const author = authorInput.value;

        if (title !== '' && author !== '') {
            const book = new Book(title, author);
            this.books.push(book);
            this.displayBooks();
            titleInput.value = '';
            authorInput.value = '';
        }
    }

    displayBooks() {
        this.list.innerHTML = '';
        this.books.forEach(book => {
            const li = document.createElement('li');
            li.textContent = `${book.title} by ${book.author}`;
            this.list.appendChild(li);
        });
    }
}

const bookManager = new BookManager();

// displayBooks() {
//     this.list.innerHTML = '';

//     for (let i = 0; i < this.books.length; i++) {
//         const book = this.books[i];
//         const li = document.createElement('li');
//         li.textContent = `${book.title} by ${book.author}`;
//         this.list.appendChild(li);
//     }
// }