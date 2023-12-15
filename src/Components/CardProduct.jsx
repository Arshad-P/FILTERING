


import React from 'react'
import {BsFillBagHeartFill} from 'react-icons/bs'
import './CardProduct.css'



const CardProduct = ({img,title,star,reviews,newPrice, prevPrice}) => {
  return (

    <>
    <div className='productContainer'>
    <section className='card'>
        <img src={img} alt={title} className='card-img'/>

        <section >
          <h3 className='card-title'>
               {title}
          </h3>
                <section className='card-reviews'>
                
                {star} {star} {star} {star}
            <span className='total-reviews'>
                 {reviews}
            </span>
                </section>
             
             <section className='card-price'>
         <section className='price'>
          {newPrice}  - <del>{prevPrice}</del> 
              </section>
              
              <section className='bag'>
                     
            <BsFillBagHeartFill className='bag-icon'/>
              </section>
             </section>

        
        </section>
      </section>


      </div>
    </>
  )
}

export default CardProduct