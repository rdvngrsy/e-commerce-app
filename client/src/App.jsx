import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import Nav from "./components/Navbar/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Signin from "./pages/Auth/Signup";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signin />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  );
};

export default App;
