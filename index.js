function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
    .then(resp => resp.json())
    .then(json => renderBooks(json))
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


// //Ensure that you return fech(URL)
// // on line 6 we pass a function
// function fetchBooks() {
//   return fetch("https://anapioficeandfire.com/api/books")
//     .then(resp => resp.json())
//     .then(json => renderBooks(json))
// }

// function renderBooks(books) {
//   const main = document.querySelector('main')
//   books.forEach(book => {
//     const h2 = document.createElement('h2')
//     h2.innerHTML = book.name
//     main.appendChild(h2)
//   })
// }

// document.addEventListener('DOMContentLoaded', function() {
//   fetchBooks()
// })
