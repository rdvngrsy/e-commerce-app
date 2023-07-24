import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import Laptop from "./pages/Categories/Laptop";
import MobilePhones from "./pages/Categories/MobilePhones";
import AllProducts from "./pages/Categories/AllProducts";
import Tv from "./pages/Categories/Tv";
import Nav from "./components/Navbar/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Signin from "./pages/Auth/Signup";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

const App = () => {
  
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signin />} />
        <Route path="/categories/all-products" element={<AllProducts/>} />
        <Route path="/products/:product_id" element={<ProductDetail/>} />
        <Route path="/categories/mobile-phones" element={<MobilePhones/>} />
        <Route path="/categories/laptops" element={<Laptop/>} />
        <Route path="/categories/tv" element={<Tv/>} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  );
};

export default App;
