
import Inputs from '../../Components/Inputs'
import React from 'react'
import './Price.css'

const Price = ({handleChange}) => {

  
  return (
    

        <>
    <h1 className='PriceTag'>Price</h1>
  

   
    <label className='labelCntainer'>
        <input
           onChange={handleChange} type="radio" value="" name="test2" />
             <span>  All</span>  
      </label>
<br />
<div className='inputsContainer'>
        <Inputs 
      
          handleChange={handleChange}
          value={50}
          title=" $0-$50"
          name="test2"
        />
<br />
        <Inputs 
          handleChange={handleChange}
          value={100}
          title="  $50 - $100"
          name="test2"
          
        />
<br />
        <Inputs 
          handleChange={handleChange}
          value={150}
          title=" $100 - $150"
          name="test2"
        />
<br />
        <Inputs 
          handleChange={handleChange}
          value={200}
          title=" Over - $200"
          name="test2"
        />
        </div>
        </>
  )
}

export default Price