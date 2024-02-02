import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/footer";
import Footer2 from "./components/footer/footer2";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import Tabs from "./components/shop/tabs";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="Shop" element={<Tabs/>}/>

        </Routes>
        <Footer />
        <Footer2 />

      </div>
    </BrowserRouter>
  );
}
export default App;



        {/* <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/shop" element={<Shop/>}/>
        </Routes> */}