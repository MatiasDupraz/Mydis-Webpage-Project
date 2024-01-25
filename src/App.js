import './App.css';
import ProductDetail from './components/ProductDetail.js';
import MainPage from './pages/MainPage.js';
import ChatButton from './components/ChatButton.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import products from './data/products.js';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';

function App(){
  //create routes for each product
  const productRoutes = products.map((product) => {
    return(
    <Route path={`/products/${product.category}/${product.ID}`} element={<ProductDetail title={product.title} rate={product.rate} price={product.price} images={product.images} category={product.category} ID={product.ID} description={product.description} stock={product.stock} />}/>)
  })
  
  return(
    <Router>
      <NavBar/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          {productRoutes}
        </Routes>
        <ChatButton/>
      <Footer/>
    </Router>

  )
}

export default App