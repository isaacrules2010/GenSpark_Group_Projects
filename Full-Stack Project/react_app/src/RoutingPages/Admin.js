import React, { useEffect, useState } from "react";
import Creator from "../Components/Creator";

export default function Admin(){
    const [adminDisplay,setAdminDisplay] = useState("none");

    useEffect(() => {
        if(localStorage.getItem('role')!=='admin'){
            window.location.href="http://localhost:3000/admin/login"
        }
        setAdminDisplay('block');
    },[]);

    return(
        <div className="admin" style={{display:adminDisplay}}>
            <Creator/>
        </div>
    )


}