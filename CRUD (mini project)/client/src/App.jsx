import {BrowserRouter, Routes, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import User from "./Components/User";
import CreateUser from "./Components/CreateUser";
import UpdateUser from "./Components/UpdateUser";

function App() {
  return <>
  <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<User/>}></Route>
      <Route path="/create" element={<CreateUser/>}></Route>
      <Route path="/update/:id" element={<UpdateUser/>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
  </>;
}

export default App;
