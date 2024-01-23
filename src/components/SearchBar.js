import React from 'react'
import Icon from './Icon'
import classNames from 'classnames'

const SearchBar = ({className, ...props}) => {
  const finalClassName = classNames('bg-white border-gray-800 rounded-md flex justify-end shadow-lg shadow-neutral-700', className)

  return (
    <form {...props} className={finalClassName}>
    <input className='bg-transparent border-transparent w-full px-2'/>
      <button className='border bg-gray-200 border-gray-300 rounded-r-md hover:bg-gray-300 hover:border-gray-400'><Icon className={'py-2 px-4 text-gray-700 hover:text-neutral-800'} disableHover search/></button>
    </form>
  )
}

export default SearchBar
