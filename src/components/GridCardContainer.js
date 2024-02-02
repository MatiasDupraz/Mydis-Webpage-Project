import React from 'react'
import ProductCard from './ProductCard'
import classNames from 'classnames'

//This component receives a list of product objects, asigns a card to each product, and creates a grid to display them

const GridCardContainer = ({products, className, cardClassName}) => {

    let finalClassName = classNames(className, "flex justify-center pt-[168px] items-center w-full")
    let finalCardClassName = classNames(cardClassName, "max-w-[80%] self-center mx-16 md:mx-4")


    let shownProducts = products.map((product, index) => {
        
        return (
          <ProductCard
            key={index}
            title={product.title}
            rate={product.rate}
            price={product.price}
            images={product.images}
            category={product.category}
            categoryID={product.categoryID}
            className={finalCardClassName}
            ID={product.ID}
          />
        )})

  return (
    <div className={finalClassName}>
      <div className="grid md:grid-cols-9 items-center w-full ">
        <div className="hidden lg:block md:col-span-1 "></div>
        <div className="col-span-8 col-start-0 lg:col-span-7  grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mx-auto mb-10 md:mb-0">
          {shownProducts}
        </div>
        <div className="hidden lg:block md:col-span-1 "></div>
      </div>
    </div>
  )
}

export default GridCardContainer
