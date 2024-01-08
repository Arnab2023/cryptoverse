/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Crypto from "./pages/Crypto";
import Exchanges from "./pages/Exchanges";
import News from "./pages/News";
import CryptoCharts from "./pages/CryptoCharts";
import Details from "./components/details/Details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/crypto" element={<Crypto />}></Route>
          <Route path="/exchanges" element={<Exchanges />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/detail/:name" element={<Details />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
