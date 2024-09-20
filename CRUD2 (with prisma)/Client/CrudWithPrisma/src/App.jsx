import { useState } from "react";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateUser from "./Components/CreateUser";
import UpdateUser from "./Components/UpdateUser";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* child of home route    */}
          <Route path="create" element={<CreateUser />} />
          <Route path="update/:id" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
