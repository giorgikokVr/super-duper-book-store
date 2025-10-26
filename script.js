const books = [
    { id: 1, title: "Invisible Cities", author: "Italo Calvino", price: 14.99 },
    { id: 2, title: "No Country for Old Men", author: "Cormac McCarthy", price: 11.99 },
    { id: 3, title: "Emil of Loenneberga", author: "Astrid Lindgren", price: 10.99 },
    { id: 4, title: "Das Kapital", author: "Karl Marx", price: 9.99 },
    { id: 5, title: "The Phenomenology of Spirit", author: "Hegel", price: 11.99 },
    { id: 6, title: "Plato", author: "The Republic", price: 13.99 }
];

let cart = [];

document.addEventListener('DOMContentLoaded', function() {
    displayBooks();
});

function displayBooks() {
    const bookGrid = document.getElementById('book-grid');
    bookGrid.innerHTML = '';

    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <h3 class="book-title">${book.title}</h3>
            <p class="book-author">by ${book.author}</p>
            <p class="book-price">$${book.price}</p>
            <button class="add-to-cart" onclick="addToCart(${book.id})">
                Add to Cart
            </button>
        `;
        bookGrid.appendChild(bookCard);
    });
}

function addToCart(bookId) {
    const book = books.find(b => b.id === bookId);
    cart.push(book);
    updateCartCount();
    
    alert(`Added "${book.title}" to cart!`);
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}