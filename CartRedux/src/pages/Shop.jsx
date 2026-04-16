import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../config/axiosInstance'
import ProductCard from '../components/ProductCard'
import { useSelector } from 'react-redux'

const Shop = () => {

  const [products , setProducts] = useState([])

  let {cartItems} = useSelector((store)=>store.cart)
  console.log(cartItems)

  useEffect(()=>{
    (async()=>{
      try {
        let res = await axiosInstance.get('/products')
        console.log(res.data)
        setProducts(res.data)
      } catch (error) {
        console.log("an error occured" , error)
      }
    })()
  },[])

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((elem)=>{
       let cartItem = cartItems.find((val)=> val.id === elem.id)

       return <ProductCard product={elem} key={elem.id} quantity={cartItem?.quantity} />
      })}
    </div>
    </div>
  )
}

export default Shop
