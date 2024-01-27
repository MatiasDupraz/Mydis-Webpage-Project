import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import categories from "./../data/categories";
import Icon from "./Icon";
import classNames from "classnames";

const Categories = ({ state }) => {
  const [styleState, setStyleState] = useState(state);
  useEffect(() => {
    setTimeout(() => {
      setStyleState(state);
    }, 200);
  }, [state]);
  const finalClassName = classNames(
    "bg-gray-100 shadow-md text-lg text-neutral-600 w-56 z-30",
    styleState ? "absolute" : "hidden"
  );
  const organizeCategories = (categories) => {
    const organized = {};

    // Organize categories into a tree-like structure
    categories.forEach((category) => {
      if (!organized[category.parentCategoryID]) {
        organized[category.parentCategoryID] = [];
      }
      organized[category.parentCategoryID].push(category);
    });

    return organized;
  };

  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (categoryID) => {
    setExpandedCategories((prevState) => ({
      ...prevState,
      [categoryID]: !prevState[categoryID],
    }));
  };

  const renderCategory = (category) => {
    const isLastCategory = !organizedCategories[category.ID];
    category.link = () => (
      <Link
        to={`/categories/${category.ID}`}
        key={category.ID}
        className="cursor-pointer py-2 px-3"
      >
        {category.name}
      </Link>
    );
    return (
      <div
        className="flex hover:bg-neutral-200"
        key={category.ID}
        onMouseEnter={() => toggleCategory(category.ID)}
        onMouseLeave={() => toggleCategory(category.ID)}
      >
        <p className="py-2 pl-1 hover:text-red-800">
          <Icon rightArrowSimple /> {category.link()}
        </p>

        {expandedCategories[category.ID] && !isLastCategory && (
          <div className="bg-gray-100 shadow-md text-lg w-56 ml-56 absolute">
            {organizedCategories[category.ID].map((subCategory) =>
              renderCategory(subCategory)
            )}
          </div>
        )}
      </div>
    );
  };

  const organizedCategories = organizeCategories(categories);

  return (
    <div className={finalClassName}>
      {organizedCategories[""] &&
        organizedCategories[""].map((rootCategory) =>
          renderCategory(rootCategory)
        )}
    </div>
  );
};

export default Categories;
