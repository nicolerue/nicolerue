import "./App.css";
import Home from "./components/Home";
import Work from "./components/Work";
import Contact from "./components/Contact";
import "./components/styles.scss";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
