import React, { useState } from 'react';
import { Buffer } from "buffer";

//https://www.youtube.com/watch?v=rWfhwW9forg


export default function LoginForm() {

  const loginURL = "http://localhost:8080/token"

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [badLoginDisplay, setBadLoginDisplay] = useState("hidden");
  const [errorMessage, setErrorMessage] = useState("");


  const sendLoginRequest = async () => {

    setBadLoginDisplay("hidden");

    const res = await fetch(loginURL, {
      method: 'post',
      headers: new Headers({
        'Authorization': 'Basic ' + Buffer.from(username + ":" + password).toString('base64')
      })
    })

    if (!res.ok) {
      if ([401, 403].includes(res.status)) {
        localStorage.removeItem('token');
        setErrorMessage("Wrong email or password");
        setBadLoginDisplay("visible");
      }
    } else {
      let data = await res.text();
      localStorage.setItem('token', 'Bearer ' + data);
      window.location.href = "http://localhost:3000/";
    }
  }

  const createNewUser = () => {
    window.location.href = "http://localhost:3000/newUser";
  }

  return (
    <div className='Container mt-5'>

      <form className='col-md-8 mx-auto'>
        <div className='row justify-content-center pb-3'>
          <div className='col-8'>
            <label htmlFor='username' className='form-label'>Username</label>
            <input type="text" className="form-control" id='username' placeholder='Username' required value={username} onChange={(event) => setUserName(event.target.value)} />
          </div>
        </div>

        <div className='row justify-content-center pb-3'>
          <div className='col-8'>
            <label htmlFor='password' className='form-label'>Password</label>
            <input type="password" className="form-control" id='password' placeholder='password' required value={password} onChange={(event) => setPassword(event.target.value)} />
          </div>
        </div>

        <div className='row justify-content-center pb-3'>
          <div className='col-6'>
            <button type='button' id='submit' className='btn btn-primary' style={{ "width": "100%" }} onClick={() => sendLoginRequest()}>submit</button>
          </div>
          <div className='col-2'>
            <button type='button' id='newUser' className='btn btn-success' style={{ "width": "100%" }} onClick={() => createNewUser()}>Create new user</button>
          </div>
        </div>

        <div className='row justify-content-center pb-3'>
          <div className='col-8'>
            <div role="alert" className='alert alert-danger alertMessage mt-3 text-center' style={{ visibility: badLoginDisplay }}>{errorMessage}</div>
          </div>
        </div>

      </form>
    </div>
  )
}
