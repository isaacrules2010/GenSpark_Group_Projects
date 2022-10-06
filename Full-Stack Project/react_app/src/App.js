import Home from "./RoutingPages/Home";
import Login from "./RoutingPages/Login";
import Logout from "./RoutingPages/Logout";
import NewUser from "./RoutingPages/NewUser";
import { Route, Routes } from "react-router-dom";
import CharacterList from "./RoutingPages/CharacterList";
import Character from "./RoutingPages/Character";
import Admin from "./RoutingPages/Admin";
import NewCharacter from "./RoutingPages/NewCharacter";

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
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/newUser" element={<NewUser />}></Route>
          <Route path="/characters" element={<CharacterList />}/>
          <Route path="/characters/:id" element={<Character />}/>
          <Route path="/characters/newCharacter" element={<NewCharacter />}/>
          <Route path="/admin" element={<Admin />}/>
        </Routes>
  );
}

export default App;
