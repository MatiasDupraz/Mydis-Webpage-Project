import React from 'react';
import products from '../data/products';
import categories from '../data/categories';
import ProductCard from './ProductCard';
const CategoryFilter = ({ selectedCategory }) => {
  const isProductInCategory = (product, category) => {
    // Verifica si la categoría del producto coincide con la categoría dada
    if (product.category === category) {
      return <ProductCard title={product.title} rate={product.rate} price={product.price} image={product.image} category={product.category} categoryID={product.categoryID} ID={product.ID}/>
    }

    // Verifica si la categoría dada es una categoría padre del producto
    let parentCategory = product.parentCategoryID;
    while (parentCategory) {
      if (parentCategory === category) {
        return true;
      }

      // Obtén la categoría padre de la categoría actual
      const currentCategory = getCategoryByID(parentCategory);

      // Continúa la búsqueda hacia arriba en la jerarquía de categorías
      parentCategory = currentCategory.parentCategoryID;
    }

    return false;
  };

  const getCategoryByID = (categoryID) => {
    // Encuentra la categoría por su ID en tu array de categorías
    return categories.find((category) => category.ID === categoryID);
  };

  const itemsInCategory = () => {
    // Filtra los productos basándose en la categoría dada o sus categorías padre
    const filteredProducts = products.filter((product) => {
      return isProductInCategory(product, selectedCategory);
    });

    // Mapea los productos filtrados
    return filteredProducts.map((product) => (
      <div key={product.ID}>
        <p>{product.title}</p>
        {/* Otros detalles del producto */}
      </div>
    ));
  };

  // categories es tu array de categorías, asegúrate de tenerlo disponible
  

  return (
    <div>
      {itemsInCategory()}
    </div>
  );
};

export default CategoryFilter;