import React from "react";
import products from "../data/products";
import categories from "../data/categories";
import GridCardContainer from "../components/GridCardContainer";

const FilteredProducts = ({ categoryID }) => {

    // Function to recursively find all descendant categories (All the categories that are directly or indirectly sons of "categoryID" category)
    const filterCategories = (selectedCategoryID) => {
      const selectedCategory = categories.find(
        (category) => category.ID === selectedCategoryID
        //If the category itself is the one wanted
      );
      if (!selectedCategory) return []; // Return an empty array if the category is not found
  
      const descendants = categories.filter((category) => category.parentCategoryID === selectedCategory.ID)
        .map((category) => category.ID);
  
      // Recursively find descendants of each descendant category
      return descendants.concat(
        descendants.flatMap((descendant) => filterCategories(descendant))
      );
    };
  

  // Use the filterCategories function to find all descendant categories
  const descendantCategories = filterCategories(categoryID);

  // Use the filter function to create an array of products that match the given category or its descendants
  const shownProducts = products.filter((product) => {
    return (
      product.categoryID === categoryID || // Check if the product's category matches the given category ID
      descendantCategories.includes(product.categoryID) // Check if the product's category is a descendant of the given category
    );
  });


  // Render the GridCardContainer component with the filtered products
  return <GridCardContainer products={shownProducts} />;
};

export default FilteredProducts;