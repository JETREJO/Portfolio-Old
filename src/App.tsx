import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sky from "./pages/sky/Page";
import Home from "./pages/home/page";
import Penteon from "./pages/penteon/page";
import Liverpool from "./pages/liverpool/page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sky" element={<Sky />} />
          <Route path="/penteon" element={<Penteon />} />
          <Route path="/liverpool" element={<Liverpool />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
