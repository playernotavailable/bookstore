/* App.js */

import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import BookInfo from './pages/BookInfo';
import Cart from './pages/Cart';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { books } from './data';

function App() {
  const [cart, setCart] = useState([]);

  function addItemToCart(book) {
    const dupeItem = cart.find((item) => item.id === book.id);
    
    if (dupeItem) {
      setCart(
        cart.map((item) =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) => {
        return item.id === book.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item;
      })
    );
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += item.quantity;
    });
    return counter;
  }

  function removeItem(item) {
    setCart(cart.filter((book) => book.id !== item.id));
  }

  function calcPrices() {
    let total = 0;
    cart.forEach((item) => {
      total += (item.salePrice || item.originalPrice) * item.quantity;
    });
    return {
      subtotal: total * 0.9,
      tax: total * 0.1,
      total,
    };
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div className="App">
      <Nav numberOfItems={numberOfItems()} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books books={books} />} />
        <Route 
          path="/books/:id" 
          element={<BookInfo books={books} addItemToCart={addItemToCart} cart={cart} />} 
        />
       <Route 
  path="/cart" 
  element={
    <Cart 
      books={books} 
      cart={cart} 
      updateCart={changeQuantity} 
      removeItem={removeItem} 
      totals={calcPrices()}  // ✅ Calling function HERE in App.js
    />
  } 
/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
