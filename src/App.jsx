import { HashRouter, Route, Routes } from "react-router-dom";
import Homepage from "./assets/Pages/Homepage";
import Shop from "./assets/Pages/Shop";
import Home from "./Components/Home";

export default function App() {
  return (
    <>
  <HashRouter>
  <Home/>
  <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/shop/:category" element={<Shop />} />
  </Routes>
  </HashRouter>
    </>
  )
}