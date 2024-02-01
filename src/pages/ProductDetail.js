import React, {useState} from 'react'
import classNames from 'classnames'
import usePriceFormating from '../hooks/price-formating'
import Icon from '../components/Icon'

const ProductDetail = ({title, price, images, category, ID, description, stock}) => {
  
  const formatedPrice = usePriceFormating(price)

  const  [heartClicked, setHeartClicked] = useState(false)
  const  [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const stockClassName = classNames("ml-2 px-1 py-0.5 rounded-md text-base inline-block", (parseInt(stock) < 6) ? 'text-red-600 bg-red-300' : 'text-blue-600 bg-blue-300')
  const heartButtonClassName = classNames("flex items-center justify-center w-full h-10 p-2 mr-4 text-gray-700 border rounded-md hover:bg-neutral-800 border-neutral-800 lg:w-11 hover:bg-gradient-to-r from-red-500 to-red-700 hover:text-white hover:border-white", (heartClicked ? 'bg-gradient-to-r from-red-500 to-red-700 text-white border-white' : ''))



  //This function allows the "next" arrow to change the actual displayed image to the next one
  const setNextIndex = () => {
    if(images.length === selectedImage+1 ){setSelectedImage(0)}
    else{setSelectedImage(selectedImage+1)}
  }

  //This function allows the "previous" arrow to change the actual displayed image to the previous one
  const setPreviousIndex = () => {
    if(selectedImage === 0){setSelectedImage(images.length - 1)}
    else{setSelectedImage(selectedImage-1)}
  }

  const handleQuantityChange = (event) => {
    // Update the state with the new input value
    let inputValue = parseInt(event.target.value)
    setQuantity(inputValue);
  };

  const addQuantity = () => {
    if(quantity < stock)
    {setQuantity(quantity+1)}
  }

  const removeQuantity = () => {
    if(quantity > 1)
    {setQuantity(quantity-1)}
  }

  return (
    <section className="py-10 font-poppins pt-48">
<div className="max-w-6xl px-4 mx-auto">
<div className="flex flex-wrap mb-24 -mx-4">
<div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
<div className="sticky top-0 overflow-hidden ">
<div className="relative mb-6 lg:mb-10 lg:h-96">
<a className="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2" href="#">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 text-neutral-500 bi bi-chevron-left" viewBox="0 0 16 16" onClick={() => (setPreviousIndex())}>
<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z">
</path>
</svg>
</a>
<div className='flex justify-center align-middle w-full h-96 bg-white'>
<img className="object-contain w-full lg:h-full" src={images[selectedImage]} alt="primary"/>
</div>
<a className="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2" href="#">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 text-neutral-500 bi bi-chevron-right" viewBox="0 0 16 16" onClick={() => (setNextIndex())}>
<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
</path>
</svg>
</a>
</div>
<div className="flex-wrap hidden -mx-2 md:flex">
  {images.map((image, index) => {
    console.log(index)
    return (
      <div className="w-1/2 p-2 sm:w-1/4" key={index} onClick={() => (setSelectedImage(parseInt(index)))}>
        <div className="block border border-gray-200 hover:border-red-700 " href="#">
        <img className="object-contain w-full lg:h-28" src={image} alt={"imagen N° " + index} />
        </div>
      </div>
    );
  })}
</div>
</div>
</div>
<div className="w-full px-4 md:w-1/2">
<div className="lg:pl-20">
<div className="mb-6 ">
<h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl">
{title}
</h2>
<div className="flex flex-wrap items-center mb-6">

</div>
<p className="inline-block text-3xl font-semibold ">
<span className=' text-neutral-800'>{formatedPrice}</span>
</p>
<div className='block'>
<p className='text-base text-neutral-500'>Precio válido por pago en efectivo o transferencia bancaria</p>
<p className='text-sm text-neutral-700 hover:text-red-500'>Seleccionar forma de envío</p>
</div>
</div>
<div className="mb-6 flex">
<div className='items-center justify-center bg-gray-200 flex rounded-full w-9 h-9 mr-2 text-gray-700'><Icon truck disableHover/></div>
<h2 className="mb-2 text-lg font-semibold text-gray-700 italic "> Envíos a todo el país</h2>

</div>
<div className="py-6 mb-6 border-t border-b border-gray-200">
<span className="text-base text-gray-600">En Stock</span>
<p className={stockClassName}>{stock} unidades</p>
</div>
<div className="mb-6 "></div>
<div className="flex flex-wrap items-center mb-6">
<div className="mb-4 mr-4 lg:mb-0">
<div className="w-28">
<div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
<button className="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer hover:bg-gray-300 flex items-center justify-center">
<span className="text-2xl font-normal" onClick={() => (removeQuantity())}>-</span>
</button>
<input type="number" className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none  focus:outline-none text-md hover:text-black appearance-none remove-arrow" placeholder={quantity} value={quantity} onChange={handleQuantityChange}/>
<button className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer  hover:text-gray-700 hover:bg-gray-300 flex items-center justify-center">
<span className="text-2xl font-normal flex items-center" onClick={() => {addQuantity()}}>+</span>
</button>
</div>
</div>
</div>
<div className="mb-4 lg:mb-0">
<button className={heartButtonClassName} onClick={() => (setHeartClicked(!heartClicked))}>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" bi bi-heart" viewBox="0 0 16 16">
<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z">
</path>
</svg>
</button>
</div>
<a href="#" className="w-full px-4 py-3 text-center text-blue-600 bg-blue-100 border border-blue-600 hover:bg-blue-600 hover:text-gray-100 lg:w-1/2 rounded-xl hover:bg-b-ue-500">
Agregar a lista
</a>
</div>
<div className="flex gap-4 mb-6">
<a href="#" className="w-full px-4 py-3 text-center text-gray-100 bg-blue-600 border border-transparent  hover:border-blue-500 hover:text-blue-700 hover:bg-blue-100 rounded-xl">
Comprar ahora</a>
</div>
</div>
</div>
</div>
<div className="py-6 mb-6 border-t border-b border-gray-200">
<h2 className="mb-2 text-lg font-bold text-gray-700">Descripción</h2>

<div className="p-0.5 ">
<div className="rounded-xl ">
{description}
</div>

</div>
</div>
</div>
</section>
)
}

export default ProductDetail
