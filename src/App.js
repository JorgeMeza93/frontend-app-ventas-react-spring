import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/js/all"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Clientes from "./components/pages/Clientes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/clientes" element={<Clientes/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
