import React from 'react'
import ShoppingCartCard from '../components/ShoppingCartCard'
import products from '../data/products'

const ShoppingCart = () => {
    let product = products[0]
    console.log(product)
  return (
    <div className='pt-[168px] grid grid-cols-8'>
      
        <ShoppingCartCard name={product.title} price={product.price} quantity={10} image={product.images[0]} stock={10} className={'col-start-3 col-span-4'}/>

    </div>
  )
}

export default ShoppingCart
