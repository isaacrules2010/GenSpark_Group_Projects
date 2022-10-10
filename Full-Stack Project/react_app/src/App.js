import Home from "./RoutingPages/Home";
import Login from "./RoutingPages/Login";
import NewUser from "./RoutingPages/NewUser";
import { Route, Routes } from "react-router-dom";
import CharacterList from "./RoutingPages/CharacterList";
import Character from "./RoutingPages/Character";
import Admin from "./RoutingPages/Admin";
import NewCharacter from "./RoutingPages/NewCharacter";
import AdminLoginForm from "./Components/AdminLoginForm";
import jwt_decode from 'jwt-decode';
import { useState,useEffect} from "react";

//npm install react-router-dom
//npm install npm
//npm install bootstrap
//npm install axios
//npm install jwt-decode

function App() {
  const [role,setRole] = useState([])

  useEffect(()=>{
    if(localStorage.getItem('token')!==null){
      setRole(jwt_decode(localStorage.getItem('token').replace('Bearer ','')).scope);
    }
},[role]);

  return (
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/newUser" element={<NewUser />}></Route>
          <Route path="/characters" element={<CharacterList />}/>
          <Route path="/characters/:id" element={<Character />}/>
          <Route path="/characters/newCharacter" element={<NewCharacter />}/>
          <Route path="/admin" element={role.includes('ROLE_ADMIN') ?(
          <Admin />
          ):(
            <AdminLoginForm />
          )}/>
        </Routes>
  );
}

export default App;
