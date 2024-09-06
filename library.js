// const myLibrary = [];
const myLibrary = [];

function Book(title, author, date, status) {
    this.title = title;
    this.author = author;
    this.date = date;
    this.status = status;
}

function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let date = document.querySelector('#date').value;
    let status = document.querySelector('#status').checked;
    let newBook = new Book(title,author,date, status);
    // myLibrary.push(newBook);
    console.log(newBook);
    myLibrary.push(newBook);
    render();
}

function render() {
    let libraryEl = document.querySelector('#library');
    libraryEl.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookEL = document.createElement("div");
        bookEL.setAttribute("class", "card");
        if (!book.author || !book.title){
            continue;
        }
        bookEL.innerHTML = `
            <div class="delete-btn" onclick="myLibrary.splice(${i}, 1); render();">X</div>
            <div class="card-header">
                <h3 class="title">${book.title}</h3>
                            <div class="book-picture"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="150" viewBox="0 0 256 256" xml:space="preserve">

            <defs>
            </defs>
            <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                <path d="M 10.045 80.455 l 0 -70.829 C 10.045 4.31 14.354 0 19.671 0 l 53.582 0 c 3.702 0 6.703 3.001 6.703 6.703 l 0 66.453 C 79.2 77.047 39.975 78.376 10.045 80.455 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(139,77,21); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 19.59 0 l 0 78.123 l -9.545 2.332 l 0 -70.829 C 10.045 4.31 14.354 0 19.671 0" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(104,58,18); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 75.249 75.403 h 2.459 c 1.241 0 2.247 -1.006 2.247 -2.247 v 0 c 0 -1.241 -1.006 -2.247 -2.247 -2.247 l -58.119 0 c -5.272 0 -9.545 4.273 -9.545 9.545 v 0 c 0 5.272 4.273 9.545 9.545 9.545 l 58.119 0 c 1.241 0 2.247 -1.006 2.247 -2.247 l 0 0 c 0 -1.241 -1.006 -2.247 -2.247 -2.247 l -2.459 0 V 75.403 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(104,58,18); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 30.692 43.709 l 32.459 0 c 1.739 0 3.149 -1.41 3.149 -3.149 V 21.019 c 0 -1.739 -1.41 -3.149 -3.149 -3.149 l -32.459 0 c -1.739 0 -3.149 1.41 -3.149 3.149 l 0 19.541 C 27.543 42.299 28.953 43.709 30.692 43.709 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(221,173,131); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 20.185 85.507 l 57.109 0 V 75.403 l -57.109 0 c -2.79 0 -5.052 2.262 -5.052 5.052 v 0 C 15.133 83.245 17.395 85.507 20.185 85.507 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(221,173,131); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 64.711 54.063 h -35.58 c -0.877 0 -1.589 -0.711 -1.589 -1.589 s 0.711 -1.589 1.589 -1.589 h 35.58 c 0.878 0 1.589 0.711 1.589 1.589 S 65.589 54.063 64.711 54.063 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(221,173,131); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path d="M 64.711 63.475 h -35.58 c -0.877 0 -1.589 -0.711 -1.589 -1.589 s 0.711 -1.589 1.589 -1.589 h 35.58 c 0.878 0 1.589 0.711 1.589 1.589 S 65.589 63.475 64.711 63.475 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(221,173,131); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
            </g>
            </svg>
            </div>
                <h5 class="author">${book.author}</h5>
            </div>
            <div class="card-body">
 
    <p>Published ${book.date}</p>
    <button class="read-btn ${book.status ? 'read' : 'not-read'}" onclick="toggleStatus(${i})">
        ${book.status ? "Read" : "Not Read"}
    </button>
</div>
            `
        libraryEl.appendChild(bookEL);
    }
}

function toggleStatus(bookIndex) {
    // Toggle the status of the book
    myLibrary[bookIndex].status = !myLibrary[bookIndex].status;
    
    // Re-render the library to reflect the changes
    render();
}

// addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 1960);
function closeDialog() {
    let newBookForm = document.querySelector('#new-book-form');
    newBookForm.style.display = "none";
}

let newBookbtn = document.querySelector('#new-book-btn');
let closeButton = document.querySelector('#close');

newBookbtn.addEventListener('click', () => {
    let newBookForm = document.querySelector('#new-book-form');
    newBookForm.style.display = "flex";
});

closeButton.addEventListener('click', () => {
    newBookForm.style.display = "none";
});
document.querySelector('#submit').addEventListener('click', function(event) {
    event.preventDefault();
    addBookToLibrary();
    closeDialog();
});
