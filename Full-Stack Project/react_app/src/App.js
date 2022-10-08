import Home from "./RoutingPages/Home";
import Login from "./RoutingPages/Login";
import NewUser from "./RoutingPages/NewUser";
import { Route, Routes } from "react-router-dom";
import CharacterList from "./RoutingPages/CharacterList";
import Character from "./RoutingPages/Character";
import Admin from "./RoutingPages/Admin";
import NewCharacter from "./RoutingPages/NewCharacter";
import AdminLoginForm from "./Components/AdminLoginForm";

//npm install react-router-dom
//npm install npm
//npm install bootstrap
//npm install react-validation
//npm install validate
//npm install axios

function App() {

  return (
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/newUser" element={<NewUser />}></Route>
          <Route path="/characters" element={<CharacterList />}/>
          <Route path="/characters/:id" element={<Character />}/>
          <Route path="/characters/newCharacter" element={<NewCharacter />}/>
          <Route path="/admin" element={localStorage.getItem('role')==='admin' ?(
          <Admin />
          ):(
            <AdminLoginForm />
          )}/>
        </Routes>
  );
}

export default App;
