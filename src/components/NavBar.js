import React, { useRef, useState, useEffect } from 'react'
import Icon from './Icon'
import Categories from './Categories'
import SearchBar from './SearchBar'
import classNames from 'classnames'
const NavBar = () => {
  const [openDrawer, setOpenDrawer] = React.useState(true)
  const toggleDrawer = (openDrawer) => {
    setOpenDrawer((openDrawer) => !openDrawer)
  }

  const categoriesClassName = classNames(
    'px-3 text-neutral-700 uppercase hover:text-red-900 hover:drop-shadow-lg hover:shadow-red-400 flex align-midle'
  )

  const buttonRef = useRef(null) //Ref created to handle when the user clicks inside or outside the button

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)){
        setCategoryState(false)
      }
    }
    //Attach listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);
    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [buttonRef]);

  const [categoryState, setCategoryState] = useState(false)

  
  //Change the state of displaying the category dropdown to the oppposity
  const toggleState = (categoryState) => {
    setCategoryState((categoryState) => !categoryState)
  }
  return (
    <nav className='fixed z-10 w-full '>
      <div className='font-sans flex content-between justify-between text-left py-2 px-6 bg-neutral-950 shadow items-end w-full '>
        <div className="py-2">
          <a href='/'><img src="/img/sg1.png" className='w-auto h-20' alt='Logo Mydis'/></a>
        </div>
        <SearchBar className="bg-slate-100 self-center w-1/3 hidden md:flex"/>
        <div className=" self-center flex flex-col">
          
          <a href="#">
            <div className='border border-white py-1 px-2 rounded hover:animate-pulse text-md text-white'><Icon user disableHover className={'text-white pr-2'} />Ingresar</div>
          </a>
          <a href="#" className="text-md no-underline text-white">
          <div className='mt-2'>
            
              <Icon cart className={'text-white pl-2'} />
            
          </div>
          </a>

        </div>
        
      </div>
      <div>
        <button ref={buttonRef} className='hidden md:block bg-neutral-900  bg-opacity-50 hover:bg-opacity-80 focus:bg-opacity-100 text-white py-4 px-4 align-middle font-semibold  absolute hover:shadow shadow-black focus:shadow-lg' onClick={() => toggleState()}>CATEGORIAS</button>
        <div className='flex md:block bg-neutral-200 h-14 w-full justify-center'>
          <SearchBar className={'flex md:hidden self-center shadow-sm justify-center  align-middle w-3/4'}/>
          <div className='hidden lg:flex justify-center items-center font-semibold pt-4'>
            
            <h2 className={categoriesClassName}>Pc Gamer</h2>
            <h2 className={categoriesClassName}>Notebooks</h2>
            <h2 className={categoriesClassName}>Monitores</h2>
            <h2 className={categoriesClassName}>Pc Gamer</h2>
            <h2 className={categoriesClassName}>Notebooks</h2>
            <h2 className={categoriesClassName}>Monitores</h2>
          </div>
        </div>
    </div>
    <Categories state={categoryState}/>
</nav>
  )
}

export default NavBar
