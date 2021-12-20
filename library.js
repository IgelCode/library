const span = document.getElementsByClassName("close")[0];
let myLibrary = [];
bookform = document.querySelector("#bookform");
addbook = document.querySelector("#addbook");
const modal = document.getElementById("mymodal");
const body = document.getElementById("body");

addbook.addEventListener("click", addBooktoLibrary);

span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == body) {
    modal.style.display = "none";
  }
};

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = function red() {
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
      this.read +
      "."
    );
  };
}

function addBooktoLibrary() {
  myLibrary.push(
    new book(title.value, author.value, pages.value, read.checked)
  );
}

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
