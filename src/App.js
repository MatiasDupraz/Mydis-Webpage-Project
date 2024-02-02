import "./App.css";
import ProductDetail from "./pages/ProductDetail.js";
import MainPage from "./pages/MainPage.js";
import ChatButton from "./components/ChatButton.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import products from "./data/products.js";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import FilteredProducts from "./pages/FilteredProducts.js";
import categories from "./data/categories.js";
import ShoppingCart from "./pages/ShoppingCart.js";

function App() {
  //create routes for each product
  const productRoutes = products.map((product) => {
    //This function creates a path for each product
    return (
      <Route
        path={`/products/${product.category}/${product.ID}`}
        element={
          <ProductDetail
            title={product.title}
            rate={product.rate}
            price={product.price}
            images={product.images}
            category={product.category}
            ID={product.ID}
            description={product.description}
            stock={product.stock}
          />
        }
      />
    );
  });

  const categoriesRoutes = categories.map((category) => {
    return (
      <Route
        path={`/categories/${category.ID}`}
        element={<FilteredProducts categoryID ={category.ID}/>}
      />
    );
  });

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<ShoppingCart/>}/>
        {productRoutes}
        {categoriesRoutes}
      </Routes>
      <ChatButton />
      <Footer />
    </Router>
  );
}

export default App;
