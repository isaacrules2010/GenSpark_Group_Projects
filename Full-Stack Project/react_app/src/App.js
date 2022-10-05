import Home from "./RoutingPages/Home";
import Login from "./RoutingPages/Login";
import Logout from "./RoutingPages/Logout";
import NewUser from "./RoutingPages/NewUser";
import { Route, Routes } from "react-router-dom";
//npm install react-router-dom
//npm install npm
//npm install bootstrap

function App() {
  const [jwt,setJwt] = useState("","jwt");

  return (
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/newUser" element={<NewUser />}></Route>
          <Route path="/characters" element={<CharacterList />}/>
          <Route path="/characters/*" element={<Character />}/>
        </Routes>
  );
}

export default App;
