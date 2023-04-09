//Book class
class Book {
  constructor(title, author, language) {
    (this.title = title), (this.author = author), (this.language = language);
  }

  //render correct html element
  renderBook() {
    const book = document.createElement("li");
    book.textContent = `${this.title} is written by ${this.author} in ${this.language}`;
    book.classList.add("li");

    //make favorite button
    const favoriteButton = document.createElement("button");
    favoriteButton.textContent = "\u2661";
    favoriteButton.classList.add("button");
    favoriteButton.addEventListener("click", () => {
      const title = this.title;
      favArray.push(title);
      favObject[title] = true;

      const favCount = Object.keys(favObject).reduce((count, bookTitle) => {
        if (favObject[bookTitle]) {
          count++;
        }
        return count;
      }, 0);

      document.getElementById(
        "favorite"
      ).textContent = `There are ${favCount} books favorited!`;
      favoriteButton.textContent = "❤️";
    });

    book.append(favoriteButton);

    return book;
  }
}
