import { HashRouter, Route, Routes } from "react-router-dom";
import Homepage from "./assets/Pages/Homepage";
import Shop from "./assets/Pages/Shop";
import Home from "./Components/Home";
import ProductDetailPage from "./assets/Pages/Productdetailpage";
import CheckoutPage from "./assets/Pages/Checkout";

export default function App() {
  return (
    <>
  <HashRouter>
  <Home/>
  <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/checkout" element={<CheckoutPage/>}/>
    <Route path="/shop/:category" element={<Shop />} />
    <Route path="/prdetail" element={<ProductDetailPage />} />
    <Route path="/prdetail/:handleId" element={<ProductDetailPage />} />


  </Routes>
  </HashRouter>
    </>
  )
}