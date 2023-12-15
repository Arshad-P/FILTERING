


import React from 'react'
import './NavSearchBar.css'
import AlertImage from './image/alert image red color.png'

const NavSearchBar = ({ handleInputChange, query }) => {



  return (
    

    <div >
   <img className='AlertImage' src={AlertImage} alt=''/>  
    <input
     type='text'
      placeholder='  Refresh browser before entering'
       className='search-input'
       onChange={handleInputChange}
       value={query}
      
       />

    </div>
  )
}

export default NavSearchBar