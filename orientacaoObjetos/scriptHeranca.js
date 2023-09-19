class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    getDetails() {
        return `${this.title} by ${this.author}`;
    }
}

class PhysicalBook extends Book {
    constructor(title, author, pageCount) {
        super(title, author);
        this.pageCount = pageCount;
    }

    getDetails() {
        return `${super.getDetails()} - ${this.pageCount} pages`;
    }
}

class DigitalBook extends Book {
    constructor(title, author, format) {
        super(title, author);
        this.format = format;
    }

    getDetails() {
        return `${super.getDetails()} - Digital format: ${this.format}`;
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

        const titleInput = document.getElementById('title');
        const authorInput = document.getElementById('author');
        const formatInput = document.getElementById('format');
        const pageCountInput = document.getElementById('pageCount');

        const title = titleInput.value;
        const author = authorInput.value;
        const format = formatInput.value;
        const pageCount = parseInt(pageCountInput.value);

        if (title !== '' && author !== '') {
            let book;
            if (format === 'digital') {
                book = new DigitalBook(title, author, format);
            } else {
                book = new PhysicalBook(title, author, pageCount);
            }

            this.books.push(book);
            this.displayBooks();
            titleInput.value = '';
            authorInput.value = '';
            formatInput.value = '';
            pageCountInput.value = '';
        }
    }

    displayBooks() {
        this.list.innerHTML = '';
        this.books.forEach(book => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${book.getDetails()}</span>
                <button class="remove-btn">Remover</button>
            `;
            li.querySelector('.remove-btn').addEventListener('click', () => this.removeBook(book));
            this.list.appendChild(li);
        });
    }

    removeBook(book) {
        const bookIndex = this.books.indexOf(book);
        if (bookIndex !== -1) {
            this.books.splice(bookIndex, 1);
            this.displayBooks();
        }
    }
}

const bookManager = new BookManager();