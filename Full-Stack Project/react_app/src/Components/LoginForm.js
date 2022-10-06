import React, { useState } from 'react';


export default function LoginForm() {
  
const [userName,setUserName] = useState("");
const [password,setPassword] = useState("");


console.log(userName);

const sendLoginRequest = () =>{
  const reqBody = {
    username: userName,
    password: password
  }

}
  return (
    <div className='Container mt-5'>

      <form className='col-md-8 mx-auto'>
        <div className='row justify-content-center pb-3'>
          <div className='col-8'>
            <label htmlFor='userName' className='form-label'>User Name</label>
            <input type="text" className="form-control" id='userName' placeholder='User Name' required value={userName} onChange={(event)=>setUserName(event.target.value)}/>
          </div>
        </div>

        <div className='row justify-content-center pb-3'>
          <div className='col-8'>
            <label htmlFor='password' className='form-label'>Email</label>
            <input type="password" className="form-control" id='password' placeholder='password' required value={password} onChange={(event)=>setPassword(event.target.value)}/>
          </div>
        </div>

        <div className='row justify-content-center pb-3'>
          <div className='col-8'>
            <button type='button' id='submit' className='btn btn-primary' style={{ "width": "100%" }} onClick={()=>sendLoginRequest()}>submit</button>
          </div>

        </div>

      </form>
    </div>
  )
}
