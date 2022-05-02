import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

export const Logout = () => {
  

  const dispatch=useDispatch()

  
  const navigate=useNavigate()
  

useEffect(()=>{
  navigate("/")
  dispatch({type:"logout"})
},[dispatch,navigate])



  // Logout component, just log user out and take him to `/` homepage

  // suggestion: if you are storing anyting in redux it's a good idea to
  // empty it before loggin out. eg: order

  return (<>
  
  </>);
};
