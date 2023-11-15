

import React from 'react'
import Inputs from '../../Components/Inputs'
import './Color.css'


const Color = ({handleChange}) => {
  return (


    <>
    
  <h1 className='colorsTag'>Colors</h1>
   
<label className='colorsLabel'>
<Inputs onChange={handleChange} type="radio" value="" name='test3'/>
<span 
className='colorsall'>
    All
</span >
   
</label>

<br />

<div className='colorsInputs'>
<Inputs   

 handleChange = {handleChange}
     value='black'
     title = ' Black'
     name = 'test3'
     color= 'black'

    />
<br />
<Inputs 
 
 handleChange = {handleChange}
     value='blue'
     title = ' Blue'
     name = 'test3'
     color='blue'

    />
<br />
<Inputs  

 handleChange = {handleChange}
     value='red'
     title = ' Red'
     name = 'test3'
     color='red'

    />
<br />
<Inputs 

 handleChange = {handleChange}
     value='green'
     title = ' Green'
     name = 'test3'
     color='green'

    />
<br />

<Inputs 
handleChange={handleChange} 
value='white'
title = ' White'
name = 'test3'
color='white'/>

</div>
   
   </>
  )
}

export default Color