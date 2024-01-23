import './App.css';
import ProductDetail from './components/ProductDetail.js';
import MainPage from './pages/MainPage.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import products from './data/products.js';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';

function App(){
  const productExample = products.find(product => product.ID === 'MYD2273135')
  return(
    <Router>
      <NavBar/>
        <Routes>
          <Route path='/' element={<ProductDetail title={productExample.title} rate={productExample.rate} price={productExample.price} images={productExample.images} category={productExample.category} ID={productExample.ID} description={productExample.description} stock={productExample.stock} />}/>
        </Routes>
      <Footer/>
    </Router>

  )
}

export default App