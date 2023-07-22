import React from 'react'

const SearchBarResults = ({product}) => {
  return (
    <div className='py-3 px-[14px] hover:bg-commerce-green cursor-pointer' 
         onClick={(e) => alert(`You clicked on ${product.title}`)}>{product.title}</div>
  )
}

export default SearchBarResults