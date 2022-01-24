const span = document.getElementsByClassName("close")[0];
const bookform = document.querySelector("#bookform");
const addbook = document.querySelector("#addbook");
const modal = document.getElementById("mymodal");
const body = document.getElementById("body");
let table = document.querySelector("#table");

//My Library Array with 2 test Books, you should read them.
class Library {
  books = [];
  constructor() {
    this.books = [
      {
        title: "Harry Potter",
        author: "J.K. Rowling",
        pages: "500",
        read: "read",
        info: function () {
          return (
            this.title +
            " by " +
            this.author +
            ", " +
            this.pages +
            " pages, " +
            this.read +
            "."
          );
        },
      },
      {
        title: "The Malazan Book of the Fallen",
        author: "Steven Erikson",
        pages: "1000",
        read: "read",
        info: function () {
          return (
            this.title +
            " by " +
            this.author +
            ", " +
            this.pages +
            " pages, " +
            this.read +
            "."
          );
        },
      },
    ];
  }

  //Method for adding the books/new rows in DOM
  append() {
    let i;
    for (i = 0; i < library.books.length; i++) {
      let tr = document.createElement("tr");
      let libtitle = document.createElement("td");
      let libauthor = document.createElement("td");
      let libpages = document.createElement("td");
      let libread = document.createElement("td");
      let libutility = document.createElement("td");
      libutility.className = "libutility";

      //Button to toggle read
      let readbtn = document.createElement("button");
      readbtn.className = "readbtn";
      readbtn.textContent = "Toggle Read";
      readbtn.onclick = function isRead() {
        if (libread.textContent == "read") {
          libread.textContent = "unread";
        } else {
          libread.textContent = "read";
        }
      };

      //Button to delete the row
      let delbtn = document.createElement("button");
      delbtn.className = "delbtn";
      delbtn.textContent = "Delete";
      delbtn.dataset.lul = i;
      delbtn.onclick = function erase() {
        library.books.splice(delbtn.dataset.lul, 1);
        table.removeChild(tr);
        while (table.firstChild) {
          table.firstChild.remove();
        }
        library.resetTable();
        library.append();
      };
      libutility.appendChild(delbtn);
      libutility.appendChild(readbtn);
      libtitle.textContent = library.books[i].title;
      libauthor.textContent = library.books[i].author;
      libpages.textContent = library.books[i].pages;
      libread.textContent = library.books[i].read;

      table.appendChild(tr);
      tr.appendChild(libtitle);
      tr.appendChild(libauthor);
      tr.appendChild(libpages);
      tr.appendChild(libread);
      tr.appendChild(libutility);
    }
  }
  //Method for making a new empty table
  resetTable() {
    let row = document.createElement("tr");
    let title = document.createElement("th");
    let author = document.createElement("th");
    let pages = document.createElement("th");
    let read = document.createElement("th");
    let utility = document.createElement("th");

    author.textContent = "Author";
    title.textContent = "Title";
    pages.textContent = "Pages";
    read.textContent = "Read";
    utility.textContent = "Utility";

    table.appendChild(row);
    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(pages);
    row.appendChild(read);
    row.appendChild(utility);
  }
}
let library = new Library();

//open modal to input new book
bookform.addEventListener("click", openModal);

function openModal() {
  modal.style.display = "block";
}

//Modal Button
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == (body || table) && modal.style.display == "block") {
    modal.style.display = "none";
  }
};

//Book Class

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = readed.checked ? "read" : "unread";
    this.info = function () {
      return (
        this.title +
        " by " +
        this.author +
        ", " +
        this.pages +
        " pages, " +
        this.read() +
        "."
      );
    };
  }
  addBooktoLibrary() {
    library.books.push(
      new Book(title.value, author.value, pages.value, readed.checked)
    );
    while (table.firstChild) {
      table.firstChild.remove();
    }
    library.resetTable();
    library.append();
    modal.style.display = "none";
    title.value = "";
    author.value = "";
    pages.value = "";
    readed.checked = false;
  }
}
let book = new Book(title, author, pages);

//adding a book to the library in the background

addbook.addEventListener("click", book.addBooktoLibrary);

library.append();
