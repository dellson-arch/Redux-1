import { createSlice } from '@reduxjs/toolkit'

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems : []
  },
  reducers: {
    addToCart :(state , action)=>{
        let {id} = action.payload

        let isExists = state.cartItems.find((elem)=>elem.id === id)

        if(isExists){
           isExists.quantity += 1
        }else{
            state.cartItems.push({...action.payload , quantity : 1})
        }
    },
    decrementQuantity : (state, action)=>{
        let {id} = action.payload 

        let item = state.cartItems.find((elem)=> elem.id === id)
        if(item.quantity > 1){
            item.quantity -= 1
        }else{
            state.cartItems = state.cartItems.filter((val)=> val.id != id)
        }
    },

    removeFromCart : (state , action)=>{
        let {id} = action.payload 
        state.cartItems = state.cartItems.filter((item)=> item.id != id)
    }
  }
})

export const { addToCart,decrementQuantity,removeFromCart } = CartSlice.actions
export default CartSlice.reducer