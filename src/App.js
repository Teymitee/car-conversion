import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Contact from "./Pages/Contact/Contact";
import Services from "./Pages/Home/Services/Services";
import Gallery from "./Pages/Home/Gallery/Gallery";
import E from "./Pages/Home/E/E";
import Blogs from "./Pages/Blog/Blogs/Blogs";
import Products from "./Pages/Products/Products/Products";

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="service" element={<Services></Services>}></Route>
        <Route path="experts" element={<E></E>}></Route>
        <Route
          path="service/:serviceId"
          element={<ServiceDetails></ServiceDetails>}
        ></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="gallery" element={<Gallery></Gallery>}></Route>
        <Route path="blog" element={<Blogs/>}></Route>
        <Route path="products" element={<Products/>}></Route>
        {/* <Route path="login" element={<Login></Login>}></Route> */}
        {/* <Route path="signup" element={<Signup></Signup>}></Route> */}
        <Route path="contact" element={<Contact></Contact>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
