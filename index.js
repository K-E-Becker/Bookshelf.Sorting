const bookShelfElm = document.querySelector(".bookList");
const bookCase = new BookShelf(bookShelfElm);

bookCase.seed(bookData);
