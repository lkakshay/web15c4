import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";





export const getProductData=  createAsyncThunk('api/product',()=>{
    

    return axios.get(`http://localhost:8080/orders`)
    .then((res)=>{
        return res.data
        
    })

})


const productInfoslice=createSlice({
    name:"productInfo",
    initialState:{data:[]},
    extraReducers:{
        [getProductData.fulfilled]:(state,action)=>{
         
           state.data=action.payload
            
        }

    }
})



export default productInfoslice.reducer

