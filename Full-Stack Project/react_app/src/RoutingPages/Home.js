import React from "react";
import Nav from "../Components/Nav";
import '../Home.css';


export default function Home() {


  return (
    <div>
      <Nav />
      <div className="home"/>
        <ul className="welcome" title = 'everyone'>
          <h1>Welcome to Our DnD Character Sheet</h1>
          <h4>Created by : Kaymon McCain, Isaac Cunningham, and Ian Bright</h4>
          
        </ul>
    </div>

  )
}
