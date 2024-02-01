import React, {useState, useEffect} from 'react'
import classNames from 'classnames'
import Icon from './Icon'

const ShoppingCartCard = ({name, price, quantity, image, className, stock}) => {
    
    

    const [quant, setQuant] = useState(quantity)
    const [finalPrice, setFinalPrice] = useState(price * quantity)
    
    useEffect(() => {
        setFinalPrice(price * quant)
    },[price, quant])

    const handleSetQuant = (newQuant) => {
        if(quant + newQuant > 0 && quant + newQuant <= stock){
            setQuant(quant + newQuant)
        }
    }

    const finalClassName = classNames('flex my-10 bg-neutral-200 shadow-md rounded-sm', className)
  return (
    <div className={finalClassName}>
      <img src={image} className='w-24 md:w-44 shadow-md aspect-square p-1 mr-2 rounded-sm bg-white'/>
      <div className='flex flex-col w-full m-3'>
      <div className='flex'><p className='font-bold text-xl'>{name}</p><button className='ml-auto font-bold font-mono text-xl hover:text-red-800'>X</button></div>
      <div className='flex mt-auto content-between justify-between'>
      <div className='self-start' >
      <p className='flex'><span className='select-none'>Cantidad total </span><p className='ml-2 px-0.5 rounded-md flex border border-slate-400'><span className='pl-2 pr-5 w-3 text-right self-end'>{quant}</span><span className='flex flex-col mt-1 ml-2'><Icon upArrow className={'-my-1'} onClick={() => handleSetQuant(1)}/><Icon downArrow className={'-my-1'} onClick={() => handleSetQuant(-1)}/></span></p></p>
      <p className='select-none'>Precio individual: {price}</p>
      </div>
      <div className='self-end' >
      <p className='select-none font-bold'>Precio final: {finalPrice}</p>
      </div>
      </div>
      </div>
    </div>
  )
}


export default ShoppingCartCard
