import React, { useState } from 'react';
import Service from '../Services/Service';

export default function NewUserForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [badRequestDisplay, setBadRequestDisplay] = useState("hidden");
    const [errorMessage, setErrorMessage] = useState("");
    const [loginButtonDisplay,setLoginButtonDisplay] = useState("hidden");

    const validate = async() =>{
        setBadRequestDisplay("hidden");
        setErrorMessage("");
        setLoginButtonDisplay("hidden");

        if(password1!==password2){
            setErrorMessage("Passwords do NOT match");
            setBadRequestDisplay("visible");
            return false;
        }

        const res = await Service.getToken(username,password1);
        if(res!==''){
            setErrorMessage("Login username and password has already been used");
            setBadRequestDisplay("visible");
            setLoginButtonDisplay('visible');
            return false;
        }
        return true;
    }

    const newUserRequest = async(e) =>{
        e.preventDefault();
        console.log("I am in the method");
        const isValid = await validate();
        if(isValid){
            Service.createUser(username,password1,email);
        }
        setLoginButtonDisplay("visible");
    }

    const gotToLogin = () =>{
        window.location.href = "http://localhost:3000/login";
    }


    return (
        <div>
            <div className='Container mt-5'>
                <form className='col-md-8 mx-auto' onSubmit={(e) => newUserRequest(e)}>

                    <div className='row justify-content-center pb-3'>
                        <div className='col-8'>
                            <label htmlFor='username' className='form-label'>Username</label>
                            <input type="text" className="form-control" id='username' placeholder='Username' required value={username} onChange={(event) => setUsername(event.target.value)}/>
                        </div>
                    </div>

                    <div className='row justify-content-center pb-3'>
                        <div className='col-8'>
                            <label htmlFor='email' className='form-label'>Email</label>
                            <input type="email" className="form-control" id='email' placeholder='email@email.com' required value={email} onChange={(event) => setEmail(event.target.value)}/>
                        </div>
                    </div>

                    <div className='row justify-content-center pb-3'>
                        <div className='col-8'>
                            <label htmlFor='password1' className='form-label'>Password</label>
                            <input type="password" className="form-control" id='password1' placeholder='password' required value={password1} onChange={(event) => setPassword1(event.target.value)}/>
                        </div>
                    </div>

                    <div className='row justify-content-center pb-3'>
                        <div className='col-8'>
                            <label htmlFor='password2' className='form-label'>Re-Enter Password</label>
                            <input type="password" className="form-control" id='password2' placeholder='Re-Enter Password' required  value={password2} onChange={(event) => setPassword2(event.target.value)}/>
                        </div>
                    </div>

                    <div className='row justify-content-center pb-3'>
                        <div className='col-8'>
                            <button type='submit' id='submit' className='btn btn-primary' style={{ "width": "100%" }}>submit</button>
                        </div>
                    </div>

                    <div className='row justify-content-center'>
                        <div className='col-8'>
                            <div role="alert" className='alert alert-danger alertMessage text-center' style={{ visibility: badRequestDisplay }}>{errorMessage}</div>
                        </div>
                    </div>

                    <div className='row justify-content-center'>
                        <div className='col-4'>
                            <button type='button' className='alert alert-success alertMessage text-center' style={{ "width": "100%", visibility: loginButtonDisplay }} onClick={() => gotToLogin()}>Please Login</button>
                        </div>
                    </div>


                </form>
            </div>
        </div>
    )
}
