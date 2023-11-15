


import React from 'react'
import './NavSearchBar.css'

const NavSearchBar = ({ handleInputChange, query }) => {
  return (
    
    
    <div>

    <input
     type='text'
      placeholder='  Search Product Name'
       className='search-input'
       onChange={handleInputChange}
       value={query}
     
       />
    </div>
  )
}

export default NavSearchBar