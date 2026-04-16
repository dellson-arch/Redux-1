import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'

const Cart = () => {
    let{cartItems} = useSelector((store)=>store.cart)

  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {cartItems.map((elem)=>{
        return <ProductCard product={elem} key={elem.id} quantity={elem.quantity}/>
      })}
    </div>
  )
}

export default Cart
