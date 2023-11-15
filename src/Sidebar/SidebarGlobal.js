

import React from 'react'
import './SidebarGlobal.css'
import Category from './Category/Category'
import Price from './Price/Price'
import Color from './Colors/Color'

const Sidebar = ({handleChange}) => {



  return (

    <section>
    <div>
    
         <Category handleChange={handleChange}/>
         <Price handleChange={handleChange}/>
         <Color handleChange={handleChange}/>
   </div>
   </section>
  )
}

export default Sidebar