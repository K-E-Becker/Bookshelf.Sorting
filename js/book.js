// --------------------------
//#GRADING NOTES
// --------------------------
// 1. Each book has a "Favorite" button that will add the selected book to a maintained list of the user's favorite books.
//      I can see you added the button and it changes when clicked in the DOM :)
// 2. The Book class contains a way to keep track of whether or not a Book instance is a Favorite.
//      I can see that you created a favCount within the eventListener below. One way of containing that in this class would
//      be to add a this.favorites = [] property to the Book Class, then when you create the instance in BookShelf Class, the
//      Book favorites would load automatically. - SLL
// 3. You use reduce to count the total number of favorite books, which is indicated by a DOM element.
//      Your reduce method looks awesome!!!! - SLL
// 4. The UI contains elements that indicate whether or not a book is a Favorite.
//      I can see those hearts changing color! I want to show you how to make it where you can un-favorite as well. Remind me
//      later and I'll show you how to do that. Also, the solution code will have that info. - SLL
// --------------------------
//#end GRADING NOTES

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
