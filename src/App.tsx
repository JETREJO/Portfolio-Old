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
          <Route path="/JETREJO/" element={<Home />} />
          <Route path="/JETREJO/sky" element={<Sky />} />
          <Route path="/JETREJO/penteon" element={<Penteon />} />
          <Route path="/JETREJO/liverpool" element={<Liverpool />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
