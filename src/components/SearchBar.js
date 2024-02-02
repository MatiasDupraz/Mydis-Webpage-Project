import React, {useState} from 'react'
import Icon from './Icon'
import classNames from 'classnames'

const SearchBar = ({className, buttonClassName, ...props}) => {
  const finalClassName = classNames('rounded-md justify-end shadow-lg shadow-neutral-700 flex', className)
  const finalButtonClassName = classNames(buttonClassName, 'border bg-gray-200 border-gray-300 rounded-r-md hover:bg-gray-300 hover:border-gray-400  hover:text-neutral-800')
  const [searchValue, setSearchValue] = useState('')

  const handleChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <form {...props} className={finalClassName}>
    <input className='bg-transparent border-transparent w-full px-2 outline-none  ' placeholder={'Encontrá lo que necesitás acá'} value={searchValue} onChange={handleChangeSearchValue}/>
      <button className={finalButtonClassName}><Icon className={'py-2 px-4 '} disableHover search/></button>
    </form>
  )
}

export default SearchBar
