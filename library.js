// const myLibrary = [];
const myLibrary = [
    new Book('1984', 'George Orwell', 1949),
    new Book('To Kill a Mockingbird', 'Harper Lee', 1960),
    new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925),
    new Book('Pride and Prejudice', 'Jane Austen', 1813),
    new Book('The Catcher in the Rye', 'J.D. Salinger', 1951)
];

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

function addBookToLibrary(title, author, year) {
   const newBook = new Book(title,author,year);
   myLibrary.push(newBook);
}

addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 1960);

function displayBooks() {
    const container = document.getElementById("libraryContainer");
    container.innerHTML = "";

    for(var books of myLibrary){
    
        myLibrary.forEach
        const card = document.createElement("div");
        card.classList.add("book-card");
    
        const title = document.createElement("h3");
        card.appendChild(title);

        const author = document.createElement("p");
        card.appendChild(author);

        const year = document.createElement("p");
        year.textContent = "${books.year}";
        card.appendChild(year);

        container.appendChild(card);
    }
}

displayBooks();