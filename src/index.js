/* index.js */

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faBars, 
  faTimes, 
  faBolt, 
  faBookOpen, 
  faTags, 
  faStar, 
  faStarHalfAlt, 
  faSpinner, 
  faArrowLeft, 
  faShoppingCart 
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faBars, 
  faTimes, 
  faBolt, 
  faBookOpen, 
  faTags, 
  faStar, 
  faStarHalfAlt, 
  faSpinner, 
  faArrowLeft, 
  faShoppingCart
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

reportWebVitals();
