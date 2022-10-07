import React, { useState } from 'react';
import { Buffer } from "buffer";

//https://www.youtube.com/watch?v=rWfhwW9forg


export default function LoginForm() {

const loginURL = "http://localhost:8080/token"
  
const [username,setUserName] = useState("");
const [password,setPassword] = useState("");
const [jwt,setJWT] = useState("");


const sendLoginRequest = async() =>{

  const res = await fetch(loginURL, { 
    method: 'post', 
    headers: new Headers({
        'Authorization': 'Basic '+ Buffer.from(username+":"+password).toString('base64') 
    })
})

let data = await res.text();
setJWT(data);

console.log(jwt);

window.localStorage.setItem('Authorization','Bearer '+jwt.substring(1,jwt.length-1));
}

  return (
    <div className='Container mt-5'>

      <form className='col-md-8 mx-auto'>
        <div className='row justify-content-center pb-3'>
          <div className='col-8'>
            <label htmlFor='userName' className='form-label'>User Name</label>
            <input type="text" className="form-control" id='userName' placeholder='User Name' required value={username} onChange={(event)=>setUserName(event.target.value)}/>
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
