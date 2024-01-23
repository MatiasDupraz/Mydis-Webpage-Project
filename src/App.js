import './App.css';
import ProductDetail from './components/ProductDetail.js';
import MainPage from './pages/MainPage.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import products from './data/products.js';

function App(){
  return(
    <Router>
    <Routes>
    <Route path='/' element={<ProductDetail />}/>
    </Routes>
    </Router>
  )
}

export default App