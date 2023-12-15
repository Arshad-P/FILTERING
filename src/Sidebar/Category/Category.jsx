import React from 'react'
import './Category.css'
import Inputs from '../../Components/Inputs'

const Category = ({handleChange}) => {
  return (

    <div>

      <h1 className='categoryTag'>Category</h1>

     <div>
     <label className='labelCategory'>
      <input onChange={handleChange} type="radio" value="" name='test'/>
      <span className='All'> All</span>
     </label>
<br />

<div className='categoryInputs'>
<Inputs   
    handleChange = {handleChange}
     value='sneakers'
     title = ' Sneakers'
     name = 'test'/>
<br />
<Inputs   
     handleChange = {handleChange}
     value='casual shoes'
     title = ' Casual shoes'
     name = 'test'
    />
<br />
<Inputs   
     handleChange = {handleChange}
     value='loafers'
     title = ' Loafers'
     name = 'test'

    />
    <br />
<Inputs   
  
  handleChange = {handleChange}
     value='sandals'
     title = ' Sandals'
     name = 'test'

    />
<br />
<Inputs
    
    handleChange = {handleChange}
     value='heels'
     title = ' Heels'
     name = 'test'

    />
    </div>
     </div>

    </div>
  )
}

export default Category