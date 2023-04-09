const favArray = [];
const favObject = {};

//Bookshelf class
class BookShelf {
  constructor(htmlElm, bookArr = []) {
    this.bookArr = bookArr;
    this.htmlElm = htmlElm;
    this.domBooks = bookArr;
  }

  seed(data) {
    data.forEach((bookInfo) => {
      const book = new Book(bookInfo.title, bookInfo.author, bookInfo.language);
      this.newBook(book);
    });
    this.domBooks = this.bookArr;
    this.renderBookShelf();
  }

  newBook(book) {
    this.bookArr.push(book);
  }

  //render correct html element with .map
  renderBookShelf = () => {
    const container = document.createElement("ul");
    const newShelf = this.domBooks.map((newBook) => newBook.renderBook());
    container.replaceChildren(...newShelf);
    this.htmlElm.replaceChildren(container);
  };
}

//favorites
const favorite = document.querySelector("#favorite");
favorite.textContent = `There are ${favArray.length} books favorited.`;

//searchbox
//pull over the button and add an event listener onto it
const submitBtn = document.querySelector("#searchButton");
submitBtn.addEventListener("click", () => {
  //set input box so that it is lowercase and .value to access what we typed
  const searchBox = document.getElementById("searchBox").value;
  //make a new element so that a book title from bookArr is accessed if it matches what is typed in the searchbox
  const filteredShelf = BookShelf.domBooks.filter((book) => {
    return (
      //check book title and check book author
      book.title.toLowerCase().includes(searchBox.toLowerCase()) ||
      book.author.toLowerCase().includes(searchBox.toLowerCase())
    );
  });
  container.appendChild(renderBookShelf(filteredShelf));
});

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
  document.getElementById("searchBox").focus();
  document.getElementById("searchBox").value = " ";
});

//alphabetical
//grab dropdown element and add an event listener
const dropdown = document.getElementById("dropDown");
//on click, if the value matches a-to-z use sort method to compare
//if value matches z-to-a, use sort method to compare the opposite way
dropdown.addEventListener("change", () => {
  //set value for options
  const ddOption = dropdown.value;
  //if sort option equals a-to-z, use localeCompare to sort titles or authors
  const sortBooks = BookShelf.domBooks.sort((a, b) => {
    if (ddOption === "A-title-Z") {
      return a.title.localeCompare(b.title);
    }
    if (ddOption === "Z-title-A") {
      return b.title.localeCompare(a.title);
    }
    if (ddOption === "A-to-Z") {
      return a.author.localeCompare(b.author);
    } else if (ddOption === "Z-author-A") {
      return b.author.localeCompare(a.author);
    }
  });
  container.appendChild(renderBookShelf(sortBooks));
});

//im getting the same error for .sort and .filter and Im not sure why.  I tried using google and asking some AI to double check but they all indicated it was correct so Im seriously genuinely lost.  Because of that roadblock I wasnt able to see if it was rendering correctly.  Reduce worked just fine though
