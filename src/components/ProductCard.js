//Given the basic parameters of a product, creates a card wich displays the main information and on click redirects to the product page

import React from 'react'
import Icon from './Icon'
import classNames from 'classnames';
import usePriceFormating from '../hooks/price-formating';


const ProductCard = ({title, rate, price, image, category, ID}) => {
	
	const formatedPrice = usePriceFormating(price)

	if(title.length > 60){
		return(null)
	}
	const titleClassName = classNames("mt-2 font-semibold tracking-tight hover:text-red-800", (title.length > 50) ? "text-lg" : "text-xl")

	
	
return (
	<div className="bg-neutral-100 shadow-md rounded-sm max-w-sm duration-300 hover:shadow-neutral-700 hover:shadow-lg mx-4 flex-shrink-0 my-2">
		<a className='flex justify-center align-middle w-full h-96 bg-white' href={`/products/${category}/${ID}`}>
			<img className="rounded-md flex justify-center p-1 object-contain max-w-full max-h-full m-2" src={image} alt="product pic"/>
        </a>
			<div className="px-5 pb-5 content-between">
				<a href={`/products/${category}/${ID}`}>
					<h3 className={titleClassName}>{title}</h3>
				</a>
				<div className="flex items-center mt-2.5 mb-5">
					<span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{rate}</span>
				</div>
				<div className="flex items-center justify-between">
					<span className="text-3xl font-bold text-gray-900 ">{formatedPrice}</span>
					<a href={`/products/${category}/${ID}`}
						className="text-white bg-gradient-to-r from-indigo-500 to-red-500 hover:bg-blue-800 focus:ring-2  font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-blue-700">+<Icon cart disableHover/></a>
				</div>
			</div>
	</div>
)
}

export default ProductCard
