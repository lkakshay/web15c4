

import { useDispatch} from 'react-redux';
import { useSelector } from "react-redux";
import { authInfo } from "../Redux/authReducer";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router';




export const Login = () => {

  const navigate=useNavigate()

  const auth=useSelector((state)=>{
    return state.authInfoReducer
  })
  const dispatch=useDispatch()
  
  const [formdata,setformdata]=useState({ username: "",
  pass: "",})


  const handlechange1=((e)=>{
    
 setformdata({...formdata,"username":e.target.value})
 

  })
  const handlechange2=((e)=>{
    setformdata({...formdata,"pass":e.target.value})
    
  })


  useEffect(()=>{
    navigate(auth.url)
  },[auth,navigate])


 

  const handlesubmit=()=>{
  
    
    dispatch(authInfo(formdata))
    

  }
  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={handlechange1}
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={handlechange2}
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
    
     <button onClick={handlesubmit} className="submit">Login</button>
 
    </div>
  );
};
