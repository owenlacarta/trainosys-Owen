import React from 'react'
import '../assets/Product.css'

type BasicCardProps = {
    imageUrl:string
    title:string
    price:string
}
export default function Card(props:BasicCardProps) {
  return (
<>

    <div className='content'>
    <div className='product-img'>
    <img className='product-img'  src={props.imageUrl} /> 
    </div>
    <div className='detail mt-2'> 
    <p className='product-title'>{props.title}</p> 

<p className='product-price' >${props.price}</p>

<button className='btn btn-primary'>Add to Cart</button>
    </div>
</div>
</>
  )
}
