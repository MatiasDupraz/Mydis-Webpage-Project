import React, { useRef, useState, useEffect } from "react";
import Icon from "./Icon";
import Categories from "./Categories";
import SearchBar from "./SearchBar";
import classNames from "classnames";

import { Link } from "react-router-dom";
const NavBar = () => {
  const categoriesClassName = classNames(
    "px-3 text-neutral-700 uppercase hover:text-red-900 hover:drop-shadow-lg hover:shadow-red-400 flex align-midle"
  );

  const buttonRef = useRef(null); //Ref created to handle when the user clicks inside or outside the button

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setCategoryState(false);
      }
    };
    //Attach listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);
    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [buttonRef]);

  const [categoryState, setCategoryState] = useState(false);

  //Change the state of displaying the category dropdown to the oppposity
  const toggleState = (categoryState) => {
    setCategoryState((categoryState) => !categoryState);
  };
  return (
    <nav className="fixed z-10 w-full ">
      <div className="font-sans flex content-between justify-between text-left py-2 px-6 bg-neutral-950 shadow items-end w-full ">
        <div className="py-2">
          <a href="/">
            <img src="/img/sg1.png" className="w-auto h-20" alt="Logo Mydis" />
          </a>
        </div>
        <SearchBar className="self-center w-1/3 hidden md:flex  bg-slate-950 border border-gray-500 text-white shadow-none" buttonClassName={'bg-gray-800 border-0 text-gray-400 hover:bg-gray-500'} />
        <div className=" self-center flex flex-col">
          <a href="#">
            <div className="border border-gray-600 py-1 px-2 rounded hover:border-gray-200 hover:text-gray-200 text-md text-gray-400 flex">
              <Icon user disableHover className={"sm:pr-2 sm:pt-1"} />
              <p className="hidden sm:block">Ingresar</p>
            </div>
          </a>
          <a href="#" className="text-md no-underline">
            <div className="mt-2">
              <a href="/cart"><Icon cart disableHover className={"text-gray-400 hover:text-gray-200 pl-2"} /></a>
            </div>
          </a>
        </div>
      </div>
      <div>
        <button
          ref={buttonRef}
          className="hidden md:block bg-neutral-900  bg-opacity-50 hover:bg-opacity-80 focus:bg-opacity-100 text-white py-4 px-4 align-middle font-semibold  absolute hover:shadow shadow-black focus:shadow-lg"
          onClick={() => toggleState()}
        >
          CATEGORIAS
        </button>
        <div className="flex md:block bg-neutral-200 h-14 w-full justify-center">
          <SearchBar
            className={
              "flex md:hidden self-center shadow-sm justify-center  align-middle w-3/4"
            }
          />
          <div className="hidden lg:flex justify-center items-center font-semibold pt-4">
            <Link to="/sad/dsd">
              <h2 className={categoriesClassName}>Pc Gamer</h2>
            </Link>
            <Link to="/sad/dsd">
              <h2 className={categoriesClassName}>Notebooks</h2>
            </Link>
            <Link to="/sad/dsd">
              <h2 className={categoriesClassName}>Monitores</h2>
            </Link>
            <Link to="/sad/dsd">
              <h2 className={categoriesClassName}>Pc Gamer</h2>
            </Link>
            <Link to="/sad/dsd">
              <h2 className={categoriesClassName}>Notebooks</h2>
            </Link>
            <Link to="/sad/dsd">
              <h2 className={categoriesClassName}>Monitores</h2>
            </Link>
          </div>
        </div>
      </div>
      <Categories state={categoryState} />
    </nav>
  );
};

export default NavBar;
