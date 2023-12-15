


import React from 'react'
import './NavSearchBar.css'


const NavSearchBar = ({ handleInputChange, query }) => {


// alert image (copied image address from google)
const AlertImage = 'https://cdn-icons-png.flaticon.com/512/5610/5610989.png'


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