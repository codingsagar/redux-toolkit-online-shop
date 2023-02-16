import { createSlice } from "@reduxjs/toolkit";
import {productData} from "./productsData";



const initialState = {
    cart:[],
    products: productData
}


export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addIntoCart:(state,action)=>{
            state.cart.push(action.payload);
        },
        removeFromCart:(state,action)=>{
            state.cart = state.cart.filter(item=>item.id!==action.payload);
        },
        lowToHighPrice:(state)=>{
            state.products = state.products.sort((a,b)=>a.price-b.price)
        },
        highToLowPrice:(state)=>{
            state.products = state.products.sort((a,b)=>b.price-a.price)
        },
        resetFilter:(state)=>{
            state.products = productData
        },
        sortByRating:(state,action)=>{
            state.products = productData.filter(item=>item.rating.rate>action.payload)
        }
        
    }
})



export const {addIntoCart,removeFromCart,lowToHighPrice,highToLowPrice,resetFilter,sortByRating} = cartSlice.actions;

export default cartSlice.reducer;


