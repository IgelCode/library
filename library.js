const span = document.getElementsByClassName("close")[0];
const bookform = document.querySelector("#bookform");
const addbook = document.querySelector("#addbook");
const modal = document.getElementById("mymodal");
const body = document.getElementById("body");
let myLibrary = [];
let table = document.querySelector("#table");

function cleanTable() {
  let row = document.createElement("tr");
  let title = document.createElement("th");
  let author = document.createElement("th");
  let pages = document.createElement("th");
  let utility = document.createElement("th");

  author.textContent = "Author";
  title.textContent = "Title";
  pages.textContent = "Pages";
  utility.textContent = "Utility";

  table.appendChild(row);
  row.appendChild(title);
  row.appendChild(author);
  row.appendChild(pages);
  row.appendChild(utility);
}

//open modal to input new book
bookform.addEventListener("click", openModal);

function openModal() {
  modal.style.display = "block";
}

//adding a book to the library in the background
addbook.addEventListener("click", addBooktoLibrary);

function addBooktoLibrary() {
  myLibrary.push(
    new book(title.value, author.value, pages.value, read.checked)
  );
  while (table.firstChild) {
    table.firstChild.remove();
  }
  cleanTable();
  appendLibrary();
}

span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == (body || table) && modal.style.display == "block") {
    modal.style.display = "none";
  }
};

//Book Object constructor
function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = function readed() {
    if (read == true) {
      return "readed";
    } else {
      return "unreaded";
    }
  };
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

//Adding the books in DOM
function appendLibrary() {
  let i;
  for (i = 0; i < myLibrary.length; i++) {
    let tr = document.createElement("tr");
    let libtitle = document.createElement("td");
    let libauthor = document.createElement("td");
    let libpages = document.createElement("td");

    libtitle.textContent = myLibrary[i].title;
    libauthor.textContent = myLibrary[i].author;
    libpages.textContent = myLibrary[i].pages;

    table.appendChild(tr);
    tr.appendChild(libauthor);
    tr.appendChild(libtitle);
    tr.appendChild(libpages);
  }
}

myLibrary = [
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

appendLibrary();

// Test:
/*
const theHobbit = new book(
  "The Hobbit",
  "J.R.R. Tolkien",
  "295",
  "not read yet"
);
console.log(theHobbit.info());
*/
