const book = new Book();
const ui = new UI();
const searchBook = document.querySelector("#searchBook");
const searchButton = document.querySelector("#searchButton");
const searchType = document.querySelector("#searchType");

searchButton.addEventListener("click", (event) => {
  let text = searchBook.value;

  switch (searchType.value) {
    case "title":
      book.searchByTitle(text).then((b) => {
        // ui.showBook(b.items[0]);
        ui.showBooks(b.items);
      });
      break;
    case "author":
      book.searchByAuthor(text).then((b) => {
        // ui.showBook(b.items[0]);
        ui.showBooks(b.items);
      });
      break;
  }


});
