/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";
import "./App.css";
import Home from "./pages/home";
import Crypto from "./pages/Crypto";
import Exchanges from "./pages/Exchanges";
import News from "./pages/News";
import CryptoCharts from "./pages/CryptoCharts";
import Details from "./components/details/Details";

function App() {
  const [progress, setProgress] = useState(30);
  return (
    <div className="App">
      <BrowserRouter>
      <LoadingBar
          color="#FFBF00"
          progress={progress}
          height={3.5}
          onLoaderFinished={() => setProgress(0)}
        />

        <Routes>
          <Route path="/" element={<Home setProgress={setProgress}/>}></Route>
          <Route path="/crypto" element={<Crypto setProgress={setProgress}/>}></Route>
          <Route path="/exchanges" element={<Exchanges setProgress={setProgress}/>}></Route>
          <Route path="/news" element={<News setProgress={setProgress}/>}></Route>
          <Route path="/detail/:name" element={<Details setProgress={setProgress}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
