const span = document.getElementsByClassName("close")[0];
const bookform = document.querySelector("#bookform");
const addbook = document.querySelector("#addbook");
const modal = document.getElementById("mymodal");
const body = document.getElementById("body");
let myLibrary = [];

bookform.addEventListener("click", openModal);

function openModal() {
  modal.style.display = "block";
}

addbook.addEventListener("click", addBooktoLibrary);

span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == (body || table) && modal.style.display == "block") {
    modal.style.display = "none";
  }
};

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

function addBooktoLibrary() {
  myLibrary.push(
    new book(title.value, author.value, pages.value, read.checked)
  );
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
