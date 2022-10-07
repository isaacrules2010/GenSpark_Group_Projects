import React, { useState } from 'react';
import { Buffer } from "buffer";

//https://www.youtube.com/watch?v=rWfhwW9forg


export default function LoginForm() {

  const loginURL = "http://localhost:8080/token"

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [jwt, setJWT] = useState("");
  const [badLoginDisplay,setBadLoginDisplay] = useState("hidden");
  const [errorMessage,setErrorMessage] = useState("");


  const sendLoginRequest = async () => {

    setBadLoginDisplay("hidden");

    //const token = localStorage.getItem('token');
    localStorage.removeItem('token');
    if(token===null){
      window.location.href = "http://localhost:3000/login"
    }

    const res = await fetch(loginURL, {
      method: 'post',
      headers: new Headers({
        'Authorization': token
      })
    })

    if (!res.ok) {
      if([401,403].includes(res.status)){
      localStorage.removeItem('token');
      setErrorMessage("Wrong email or password");
      setBadLoginDisplay("visible");
      }
    }else{
    let data = await res.text();
    setJWT(data);
    localStorage.setItem('token', 'Bearer ' + jwt);
    console.log(localStorage.getItem('token'));
    //window.location.href = "http://localhost:3000/";
  
    }
  }

  return (
    <div className='Container mt-5'>

      <form className='col-md-8 mx-auto'>
        <div className='row justify-content-center pb-3'>
          <div className='col-8'>
            <label htmlFor='userName' className='form-label'>User Name</label>
            <input type="text" className="form-control" id='userName' placeholder='User Name' required value={username} onChange={(event) => setUserName(event.target.value)} />
          </div>
        </div>

        <div className='row justify-content-center pb-3'>
          <div className='col-8'>
            <label htmlFor='password' className='form-label'>Password</label>
            <input type="password" className="form-control" id='password' placeholder='password' required value={password} onChange={(event) => setPassword(event.target.value)} />
          </div>
        </div>

        <div className='row justify-content-center pb-3'>
          <div className='col-8'>
            <button type='button' id='submit' className='btn btn-primary' style={{ "width": "100%" }} onClick={() => sendLoginRequest()}>submit</button>
            <div role="alert" className='alert alert-danger alertMessage pb-3' style={{ visibility: badLoginDisplay}}>{errorMessage}</div>
          </div>

        </div>

      </form>
    </div>
  )
}
