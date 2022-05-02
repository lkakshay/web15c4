import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";





export const authInfo=  createAsyncThunk('api/auth',(formdata)=>{
    

    return axios.get(`http://localhost:8080/users?username=${formdata.username}&pass=${formdata.pass}`)
    .then((res)=>{
      if(res.data.length!==0){

        if(res.data[0].role==="admin"){
            return ({role:res.data[0].role,status:true,url:"/orders" })

        }

        if(res.data[0].role==="client"){
            return ({role:res.data[0].role,status:true,url:"/neworder" })

        }
      }
       
    })

})


const authInfoslice=createSlice({
    name:"authInfo",
    initialState:{role:"",status:false,url:"/login"},
    extraReducers:{
        [authInfo.fulfilled]:(state,action)=>{
            if(action.payload){
                    state.role=action.payload.role
                    state.status=action.payload.status
                    state.url=action.payload.url
                    
            
            }

        },
        logout:(state)=>{
            
            state.role=""
                    state.status=false
                    state.url="/login"
        }
    }
}
    


)



export default authInfoslice.reducer

