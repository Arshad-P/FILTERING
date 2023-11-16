

import React from 'react'
import './Recommend.css'
import Button from '../Components/Button'
// React Toastify notification 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'




const Recommend = ({handleClick}) => {


const tostify3 = ()=>{


  toast.success('Branding Filtered Successfully', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });

}



  return (
    
    <>
  <div>
  <h2 className='recommend-title'>
    Recommended
  </h2>

  <div className='recommend-flex'>
   
   <div onClick={tostify3} className='tostify'>

    <Button onClickHandler ={handleClick} value ='' title='All Products'/>
   
    <Button onClickHandler ={handleClick} value ='Puma' title='Puma'/>

     <Button onClickHandler ={handleClick} value ='Nike' title='Nike'/>

     <Button onClickHandler ={handleClick} value ='Vans' title='Vans'/>
<br />
     <Button onClickHandler ={handleClick} value ='Adidas' title='Adidas'/>
     
     <Button onClickHandler ={handleClick} value ='Skechers' title='Skechers'/>

     <Button onClickHandler ={handleClick} value ='Sparx' title='Sparx'/>

</div>
<ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </div>
    </div>
    


    <div className='AdvertisementContainer'>
   <div className='productContainer1'>
     <h1 className='ProductAdvertisement01'>
      Product
      </h1> 
    </div>
  <br /> 

     <div className='productContainer2'>
     <h1 className='ProductAdvertisement02'>
      Filtering & Searching . . .
      </h1>
 </div>
   </div>

    </>
  )
}

export default Recommend