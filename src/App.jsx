import { HashRouter, Route, Routes } from "react-router-dom";
import Homepage from "./assets/Pages/Homepage";
import Shop from "./assets/Pages/Shop";
import Home from "./Components/Home";
import ProductDetailPage from "./assets/Pages/Productdetailpage";

export default function App() {
  return (
    <>
  <HashRouter>
  <Home/>
  <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/shop/:category" element={<Shop />} />
    <Route path="/prdetail" element={<ProductDetailPage />} />
    <Route path="/prdetail/:handleId" element={<ProductDetailPage />} />


  </Routes>
  </HashRouter>
    </>
  )
}