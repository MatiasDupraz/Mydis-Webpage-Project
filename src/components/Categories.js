import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import categories from "./../data/categories";
import Icon from './Icon';
import classNames from 'classnames';

const Categories = ({state}) => {
    const finalClassName = classNames('bg-gray-100 shadow-md text-lg text-neutral-600 w-56 z-30 ', (state ? "absolute" : "hidden"))
  const organizeCategories = (categories) => {
    const organized = {};

    // Organize categories into a tree-like structure
    categories.forEach(category => {
      if (!organized[category.parentCategoryID]) {
        organized[category.parentCategoryID] = [];
      }
      organized[category.parentCategoryID].push(category);
    });
    return organized;
  };

  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (categoryID) => {
    setExpandedCategories(prevState => ({
      ...prevState,
      [categoryID]: !prevState[categoryID],
    }));
  };

  const renderCategory = (category) => {
    const isLastCategory = !organizedCategories[category.ID] || organizedCategories[category.ID].length === 0;

    return (
        <div className='flex hover:bg-neutral-200' key={category.ID} onMouseEnter={() => toggleCategory(category.ID)} onMouseLeave={() => toggleCategory(category.ID)}>
        {/* Use Link for navigation */}
            <Link to={category.link || '#'} className={isLastCategory ? 'cursor-pointer' : ''}>
                <p className='py-2 pl-1'><Icon rightArrowSimple/> {` ${category.name}`}</p>
            </Link>
        {expandedCategories[category.ID] && !isLastCategory && (
            <div className="bg-gray-100 shadow-md text-lg w-56 ml-56 absolute">
                {organizedCategories[category.ID].map(subCategory => renderCategory(subCategory))}
            </div>
        )}
        </div>
    );
    };

    const organizedCategories = organizeCategories(categories);

    return (
    <div className={finalClassName}>
        {organizedCategories[''] && organizedCategories[''].map(rootCategory => renderCategory(rootCategory))}
    </div>
    );
};

export default Categories;