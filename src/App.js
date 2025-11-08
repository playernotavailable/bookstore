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
    setCart([... cart, {...book, quantity: 1}]);
  } 

  function changeQuantity(book, quantity) {
    setCart(cart.map(item => {
      return item.id === book.id ? {
          ...item, quantity: +quantity,
        } : item
    }))
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter =+ item.quantity 
    })
    return counter;
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))
  }

  return (
    <div className="App">
      <Nav numberOfItems={numberOfItems()}/>
      <Routes>
      <Route path="/"  element={<Home />}/>
      <Route path="/books" element={<Books books={books}/>}/>
      <Route path="/books/:id" element={<BookInfo books={books} addItemToCart={addItemToCart}/>}/>
      <Route path="/cart" element={() => <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem}/> }/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
