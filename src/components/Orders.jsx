import { useEffect } from "react";
import { getProductData } from "../Redux/productReducer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Dialog } from "@mui/material";
import { TextField } from "@mui/material";
import { DialogActions } from "@mui/material";
import { useState } from "react";
import { DialogContentText } from "@mui/material";
export const Orders = () => {

  const dispatch=useDispatch()
  const [popup,setpopup]=(useState(false))
  const [price,setprice]=(useState())
  const handlepopup=()=>{
    setpopup(true)
  }
  const handlechangeprice=(e)=>{
    console.log(e.target.value)
  }
  const handleclose=()=>{
    setpopup(false)
  }
 const handleselect=(e)=>{

  console.log(e)

 }


  const data=useSelector((state)=>{
    return state.productInfoReducer

  })


  useEffect(()=>{
    dispatch(getProductData())

  },[dispatch])
  return (
    <div>
      <div>
        <div>
          <select className="controls" name="progress" id="progress">
            <option value="id">ID</option>
            <option value="status">Status</option>
            <option value="cost">Cost</option>
          </select>
        </div>
        <table className="orders">
          <thead>
            <tr>
              <th>ID</th>
              <th>Problem</th>
              <th>Client Name</th>
              <th>Status</th>
              <th>Cost</th>
              <th>Change Status</th>
              <th>Accept</th>
            </tr>
          </thead>
          <tbody>
           {data.data.map((e)=>{
             return(
              <tr className="orders-row" key={e.id}>
              <td className="id">e.id</td>
              <td className="problem">{e.problem}</td>
              <td className="owner">{e.owner_name}</td>
              <td className="status">{e.brand}</td>
              <td className="cost">cost</td>
              <td className="change-status">
                {/* Show select dropdown only if status is Not Accepted */}

                {e.status!=="Not Accepted"?(<select className="changeStatus" name="changeStatus"
                onChange={()=>{
                  handleselect(e)
                }}>
                  <option>{e.status}</option>
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                  <option value="Not Accepted">Not Accepted</option>
                </select>):<>-</>}
                
              </td>
              <td className="accept">
                {/* Show this button only if status is Not Accepted */}
                {/* on change make request to update it in db, and show changed status in table */}
                
                {e.status==="Not Accepted"?<button onClick={handlepopup}>Accept</button>:<></>}
              </td>
            </tr>
             )
           })}
          </tbody>
        </table>

        {
         
        }
      </div>
      <Dialog open={popup} onClose={handleclose}>
            <DialogContentText>
            Enter the Cost
          </DialogContentText>
            <TextField onChange={handlechangeprice} type="number"/>
            
          <DialogActions>
          <button onClick={handleclose}>OK</button>
        </DialogActions>
          </Dialog>
    </div>
  );
};
